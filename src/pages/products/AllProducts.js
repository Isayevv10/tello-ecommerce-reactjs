import React, { useEffect, useState } from "react";
import FilterProducts from "./components/FilterProducts";
import { commerce } from "../../commerce";
import "./allProducts.scss";
import Accordion from "./components/Accordion";
import Pagination from "./components/Pagination";
import { useSearchParams } from "react-router-dom";
import SiraHamburger from "./components/SiraHamburger";

const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [pageProduct, setPageProduct] = useState([]);
  const [acc, setAcc] = useState([]);
  const [brendCat, setBrendCat] = useState([]);
  const [getBrend, setGetBrend] = useState("");
  const [subBrendCatRequest, setSubBrendCatRequest] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  const [filterOpen, setFilterOpen] = useState(false);
  const [siraOpen, setSiraOpen] = useState(false);

  // all products request

  const fetchProducts = async () => {
    setLoading(true);

    const res = await commerce.products.list({
      category_slug: searchParams.has("brand")
        ? [searchParams.get("brand")]
        : ["filter"],
      limit: 6,
      page: currentPage,
      sortBy: "price",
      sortDirection: searchParams.has("sortDirection")
        ? searchParams.get("sortDirection")
        : "desc",
    });

    setPageCount(res.meta.pagination.total_pages);
    setPageProduct(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    fetchProducts();
  }, [searchParams]);

  // category request for accordion
  const fetchAcc = async () => {
    const res = await commerce.categories.list();
    setAcc(res.data[0].children);
  };

  useEffect(() => {
    fetchAcc();
  }, []);

  // specific category
  const specific = async () => {
    const res = await commerce.categories.retrieve(`${getBrend}`);
    setBrendCat(res.children);
  };

  useEffect(() => {
    specific();
  }, [getBrend]);

  return (
    <div>
      <div className='products-container'>
        <div className='accordion'>
          {acc.map((accs) => (
            <div key={accs.id}>
              <Accordion
                accs={accs}
                brendCat={brendCat}
                setGetBrend={setGetBrend}
              />
            </div>
          ))}
        </div>
        <div>
          <FilterProducts
            pageProduct={pageProduct}
            subBrendCatRequest={subBrendCatRequest}
            loading={loading}
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
          />
        </div>

        <SiraHamburger
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          acc={acc}
          brendCat={brendCat}
          setGetBrend={setGetBrend}
        ></SiraHamburger>
      </div>

      <div>
        <Pagination
          pageCount={pageCount}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          subBrendCatRequest={subBrendCatRequest}
        />
      </div>
    </div>
  );
};

export default AllProducts;
