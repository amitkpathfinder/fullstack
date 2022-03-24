import React from "react";
import style from "./style.module.css";

const Profile = (props) => {
  console.log("Render");
  const {
    id,
    name,
    email,
    address: { zipcode, geo: { lat } = {} } = {},
    company: { name: sname } = {},
  } = props.tag;
  return (
    <div
      className={style.profileCard}
      onClick={() => props.ajaxCallForCurrentUser(id)}
    >
      <div>{name}</div>
      <div>{email}</div>
      <div>
        {zipcode}|{lat}
      </div>
      <div>{sname}</div>
    </div>
  );
};

export default Profile;
