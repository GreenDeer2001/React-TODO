import React from "react";
import "./ListContainer.css";
import Item from "../Components/item";

function ListContainers(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const value = input.value.trim();
    input.value = null;
    if (value === "" || value === null || value === undefined) {
      return;
    } else {
      props.add(value);
    }
  };

  let list;
  if (props.list.length !== 0) {
    list = props.list.map((item) => {
      if (item.type !== props.type) {
        return null;
      } else
        return (
          <Item
            key={item.id}
            itemId={item.id}
            itemText={item.text}
            itemType={item.type}
            {...props}
          />
        );
    });
  }

  let adding;
  if (props.name === "Todo") {
    adding = (
      <form onClick={(e) => submitHandler(e)} action="">
        <input type="text" placeholder="add"></input>
        <button type="submit" className="btn">
          {"+"}
        </button>
      </form>
    );
  }

  return (
    <div className={"ListContainer"}>
      <h1>{props.name}</h1>
      <ul className="list">{list}</ul>
      {adding}
    </div>
  );
}

export default ListContainers;
