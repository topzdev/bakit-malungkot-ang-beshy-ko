import React, { useEffect, useState } from "react";
import Button from "./Button";

type Props = {
  show: boolean;
  message: string;
  setShow: (val: boolean) => void;
  timeout?: number;
};

const Snackbar = ({ show, setShow, message }: Props) => {
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 5000);
  }, [show === true]);

  return (
    show && (
      <div className="bg-violet-500 fixed text-white pl-3 pr-1 py-1 rounded-xl bottom-3 left-1/2 -translate-x-1/2">
        {message}
        <Button variant="text" className="!text-white" onClick={handleClose}>
          Close
        </Button>
      </div>
    )
  );
};

export default Snackbar;
