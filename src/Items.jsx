import React from "react";
import Item from "./Item";

const Items = ({ menu, filterItems}) => {
  return (
    <div className="section-center">
      {menu.map((m) => {
        
        const { id, title, category, price, img, desc } = m;
        return (
          <>
            <Item
              key={id}
              title={title}
              category={category}
              price={price}
              img={img}
              desc={desc}
            ></Item>
          </>
        );
      })}
    </div>
  );
};

export default Items;
