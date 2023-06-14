import React from "react";

const Item = ({ item, onDeleteItem, onToggletem }) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => {
            onToggletem(item.id);
          }}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description} {item.quantity}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
};

export default Item;
