import { useState } from "react";
import Categories from "./Categories";

import data from "./data";
import Items from "./Items";
import Title from "./Title";

const tempCategories = data.map((d) => d.category);
const tempSet = new Set(tempCategories);
const tempItems = ["all", ...tempSet];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(tempItems);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories
          categories={categories}
          filterItems={filterItems}
        ></Categories>
        <Items menu={menuItems} filterItems={filterItems}></Items>
      </section>
    </main>
  );
};
export default App;
