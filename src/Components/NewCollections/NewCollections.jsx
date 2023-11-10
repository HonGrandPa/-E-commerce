import React from 'react'
import New_collections from '../Assets/new_collections'
import Items from "../Item/Items"

const NewCollections = () => {
    return (
        <section className=" flex flex-col justify-center mb-[100px] items-center w-full mt-8 mx-auto overflow-hidden gap-2.5">
          <h1 className=" text-slate-800 text-5xl font-semibold">
            NEW COLLECTIONS
          </h1>
          <hr className=" w-48 h-1.5 rounded-md bg-slate-600 mb-3.5" />
    
            <div className=" grid-cols-4 grid gap-3">
              {New_collections.map((item, i) => (
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
}

export default NewCollections
