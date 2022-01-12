import React from "react";
import style from "./style.module.css";

export const WelcomeCard = (props) => {
  return (
    <div className={style.welcomeCard}>
      Hi {props.userInfo.length > 0 && props.userInfo[0].name} Welcome onboard
    </div>
  );
};
