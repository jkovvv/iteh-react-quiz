import React, { useState } from "react";

interface Props {
  items: string[];

  onSelectItem: (item: string) => void;
}

function QuizList({ items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Kvizovi</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default QuizList;
