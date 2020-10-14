import React from "react";

function item(props) {
  return (
    <li className="listItem">
      <p>
        {props.itemType !== 1 && (
          <span>
            <button
              onClick={() => props.change(props.itemId, props.itemType - 1)}
              className="btn">{"<"}</button>
          </span>
        )}
        {props.itemText}
        <span>
          <button
            onClick={() => props.delete(props.itemId)}
            className="btn btn-delete">{"X"}</button>
        </span>
        {props.itemType !== 3 && (
          <span>
            <button
              onClick={() => props.change(props.itemId, props.itemType + 1)}
              className="btn">{">"}</button>
          </span>
        )}
      </p>
    </li>
  );
}

export default item;
