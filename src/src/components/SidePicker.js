import React, { useState, useEffect } from "react";
import View from "./View";

export default function SidePicker({ items, onChange, children }) {
  const [slectedItem, setSlectedItem] = useState(0);
  useEffect(() => {
    if (onChange) {
      onChange(items[slectedItem]);
    }
  }, [slectedItem, items, onChange]);
  return (
    <div>
      <View display="flex">
        <View>
          {items &&
            items.map((data, index) => (
              <div
                className="side-item"
                onClick={() => setSlectedItem(index)}
                style={{
                  borderRightColor: slectedItem === index && "black",
                  borderRightWidth: slectedItem === index && 2,
                }}
              >
                {data.title}
              </div>
            ))}
        </View>

<View flex={1}>
        {children}
</View>
      </View>
    </div>
  );
}
