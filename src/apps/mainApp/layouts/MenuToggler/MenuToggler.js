import React, { useEffect, useState } from "react";
import "./MenuToggler.css";

export default function LayoutMenuToggler({
  children,
  title,
  isOpened = false,
}) {
  const [isMenuVisible, setIsMenuVisible] = useState(null);
  const toggleChaptersMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(
    function () {
      setIsMenuVisible(isOpened);
    },
    [isOpened]
  );

  return (
    <div className="layout-menu-toggler w-100">
      <div
        onClick={toggleChaptersMenu}
        className="layout-menu-toggler-header d-flex justify-content-between align-items-center w-100"
      >
        <p className="mb-0 text-capitalize">{title}</p>
        <i
          className={`ps-2 align-items-center ${
            isMenuVisible ? "fa-solid fa-angle-up " : "fa-solid fa-angle-down "
          }`}
        ></i>
      </div>
      {isMenuVisible && (
        <div className="layout-menu-toggler-content">{children}</div>
      )}
    </div>
  );
}
