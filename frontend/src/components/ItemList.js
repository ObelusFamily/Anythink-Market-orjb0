import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    if (props.title && props.title.length >= 3) {
      return (
        <div className="py-4 no-items text-center d-flex justify-content-center align-items-center">
          <div className="py-4 px-5" style={{ background: "#662D84" }}>
            <h1>
              <i className="bi bi-emoji-frown-fill"></i>
            </h1>
            No items found for &ldquo;
            <span style={{ fontWeight: "bold" }}>{props.title}</span>&rdquo;.
          </div>
        </div>
      );
    }

    return <div className="py-4 no-items">No items are here... yet.</div>;
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
