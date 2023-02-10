import React from "react";
import userMail from "../../assets/images/userMail.png";
import "./style/_userMail.scss";

const UserMail = () => {
  return (
    <div>
      <div className="user-mail">
        <div>
          <img src={userMail} alt='userMail' />
        </div>
        <p>E - poçt ünvanınızı yoxlayın!</p>
      </div>
    </div>
  );
};

export default UserMail;
