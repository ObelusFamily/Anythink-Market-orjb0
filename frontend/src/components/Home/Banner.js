import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="row">
          <div className="col p-0 d-flex flex-row-reverse align-items-center">
            <span id="get-part">A place to get</span>
          </div>
          <div className="col-5">
            <div className="input-group">
              <input style={{
                "outline": "0 !important",
                "border-color": "initial",
                "box-shadow": "none"
              }} id="search-box" className="form-control form-control-lg py-2 border-right-0 border" type="search" placeholder="What is it that you truly desire?" />
                <span class="input-group-append">
                  <i className="bi bi-search form-control form-control-lg py-2 border-left-0" style={{
                    "border-top-left-radius": "0",
                    "border-bottom-left-radius": "0",
                    "color": "#8671c7",
                    "fontWeight": "bold"
                  }}></i>
                </span>
            </div>
          </div>
          <div className="col p-0 d-flex flex-row align-items-center">
            <span>the cool stuff.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
