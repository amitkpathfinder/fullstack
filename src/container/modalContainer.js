import React, { useState } from "react";

import style from "./style.module.css";
import Button from "../components/button";
import { Modal } from "../modal";

const ModalContainer = ({ title, childComponent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.modalContainer}>
      <Button text={"Open Modal"} onClick={() => setIsOpen(true)} />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {title}
        {childComponent}
      </Modal>
    </div>
  );
};
export default ModalContainer;
