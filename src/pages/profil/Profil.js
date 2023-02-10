import ProfilHeaders from "./components/ProfilHeaders";
import "./_profil.scss";
import { Outlet } from "react-router-dom";

const Profil = () => {
  return (
    <div>
      <div className='profil-container'>
        <div>
          <ProfilHeaders />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profil;
