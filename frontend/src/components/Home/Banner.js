import React, { useEffect, useState } from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const [toggleSearch, setToggleSearch] = useState(false);

  const SearchBar = (props) => {
    const [title, setTitle] = useState("");

    useEffect(() => {
      if (title.length >= 3 || title === "") {
        handleChange();
      }
    });

    const handleChange = () => {
      props.onSearchTitle(
        title,
        (page) => agent.Items.byTitle(title, page),
        agent.Items.byTitle(title)
      );
    };

    const onChangeHandle = (ev) => {
      setTitle(ev.target.value);
    };

    return (
      <div className="col-5">
        <div className="input-group">
          <input
            style={{
              outline: "0 !important",
              borderColor: "initial",
              boxShadow: "none",
            }}
            id="search-box"
            className="form-control form-control-lg py-2 border-right-0 border"
            type="search"
            placeholder="What is it that you truly desire?"
            onChange={(ev) => {
              onChangeHandle(ev);
            }}
            value={title}
          />
          <span className="input-group-append">
            <i
              className="bi bi-search form-control form-control-lg py-2 border-left-0"
              style={{
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
                color: "#8671c7",
                fontWeight: "bold",
              }}
            ></i>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="row">
          <div className="col p-0 d-flex flex-row-reverse align-items-center">
            <span id="get-part">
              A place to{" "}
              <span
                className="user-select-none"
                onClick={() => {
                  setToggleSearch(true);
                }}
              >
                get
              </span>
            </span>
          </div>
          {toggleSearch ? (
            <SearchBar onSearchTitle={props.onSearchTitle} />
          ) : (
            <span>&nbsp;</span>
          )}
          <div className="col p-0 d-flex flex-row align-items-center">
            <span>the cool stuff.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
