import goods from "./api/goods.json";
import { GoodList } from "./components/GoodList/GoodList";

import { useState } from "react";
import classNames from "classnames";

export default function App() {
  const [sortField, setSortField] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  let visibleGoods = goods;
  if (selectedColor) {
    visibleGoods = visibleGoods.filter((good) => good.color === selectedColor);
  }

  if (sortField) {
    visibleGoods = goods.toSorted((good1, good2) => {
      switch (sortField) {
        case "id":
          return good1.id - good2.id;
        case "name":
          return good1.name.localeCompare(good2.name);
        case "color":
          return good1.color.localeCompare(good2.color);
        default:
          return 0;
      }
    });
  }

  return (
    <div className="App">
      Sort by:
      {["id", "name", "color"].map((field) => (
        <button
          key={field}
          className={classNames({ active: sortField === field })}
          onClick={() => setSortField(field)}
        >
          {field}
        </button>
      ))}
      <br />
      {["red", "green", "blue"].map((item) => (
        <button
          key={item}
          className={classNames({ active: selectedColor === item })}
          onClick={() => setSelectedColor(item)}
        >
          {item}
        </button>
      ))}
      <button onClick={() => (setSortField(""), setSelectedColor(""))}>
        Reset
      </button>
      <GoodList goods={visibleGoods} />
    </div>
  );
}

// export default App;
