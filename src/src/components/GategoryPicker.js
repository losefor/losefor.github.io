import React, { useState, useEffect } from "react";

import { colors } from "../config/colors";

export default function GategoryPicker({ items, onChange }) {
  const [selectedItem, setSelectedItem] = useState(0);


  useEffect(() => {
    onChange(items[selectedItem]);
  }, [selectedItem, items, onChange]);

  return (
    <div className="gategory-picker">
      {items &&
        items.map((data, index) => (
          <div
          key={index}
            style={{
              borderBottomColor: selectedItem === index && colors.dark ,
              color: selectedItem === index ? colors.dark : colors.light,
            }}
            className={`gategory-picker__item ${selectedItem == index && 'gategory-picker__item--selected'}`}
            onClick={() => setSelectedItem(index)}
          >
            {data.title}
          </div>
        ))}
    </div>
  );
}
