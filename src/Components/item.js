import React from "react";

function item(props) {
  return (
    <li className="listItem">
      <p>
        {item.type !== 1 ? (
          <span>
            <button
              onClick={() => props.change(props.itemId, props.itemType - 1)}
              className="btn"
            >
              {"<"}
            </button>
          </span>
        ) : null}
        {props.itemText}
        <span>
          <button
            onClick={() => props.delete(props.itemId)}
            className="btn btn-delete"
          >
            {"X"}
          </button>
        </span>
        {item.type !== 3 ? (
          <span>
            <button
              onClick={() => props.change(props.itemId, props.itemType + 1)}
              className="btn"
            >
              {">"}
            </button>
          </span>
        ) : null}
      </p>
    </li>
  );
}

export default item;
