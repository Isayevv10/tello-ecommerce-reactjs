import React, { useState } from "react";
import "../styles/accordion.scss";
import { useSearchParams } from "react-router-dom";

const Accordion = ({ accs, brendCat, setGetBrend }) => {
  const [showDetail, setShowDetails] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const params = (taken) => {
    searchParams.set("brand", taken);
    setSearchParams(searchParams);
  };

  const getId = (id) => {
    setGetBrend(id);
  };

  return (
    <div>
      <div className='content-header' onClick={() => getId(accs.id)}>
        <div>
          <h4>{accs.name}</h4>
        </div>
        <div>
          <button onClick={() => setShowDetails(!showDetail)}>
            {showDetail ? "-" : "+"}
          </button>
        </div>
      </div>

      <div className='content-detail'>
        {showDetail && (
          <div>
            {brendCat
              ?.filter((i, index) => index < 4)
              .map((item) => {
                return (
                  <div key={item.id}>
                    <div>
                      <input
                        type='radio'
                        name='brand'
                        id={item.id}
                        value={searchParams}
                      />
                      <label
                        htmlFor={item.id}
                        onClick={() => {
                          params(item.name);
                        }}
                      ></label>
                      <span>{item.name}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
