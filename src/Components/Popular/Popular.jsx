import React from "react";
import data_product from "../Assets/data";
import Items from "../Item/Items";
const Popular = () => {
  return (
    <section className=" flex flex-col justify-center min-[h-screen/90] items-center w-full mt-8 mx-auto overflow-hidden gap-2.5">
      <h1 className=" text-slate-800 text-5xl font-semibold">
        POPULAR IN WOMEN
      </h1>
      <hr className=" w-48 h-1.5 rounded-md bg-slate-600 mb-3.5" />

        <div className="flex gap-5">
          {data_product.map((item, i) => (
            <Items
              key={i}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              name={item.name}
            />
          ))}
        </div>
  
    </section>
  );
};

export default Popular;
