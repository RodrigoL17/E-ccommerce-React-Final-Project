import React from "react";

const Link = ({aContent}) => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {aContent}
        </a>
      </li>
    </>
  );
};

export default Link;
