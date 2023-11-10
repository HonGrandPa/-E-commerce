import React, {useState}from "react";
import {Link} from "react-router-dom"
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import MenuList from "./MenuList";

const Navbar = () => {

 

    const [menu, setMenu] = useState("")
    const [listItems, setItem] = useState([
        {
            id : 1,
            item : "Shop"
        },
        {
            id : 2,
            item : "Men"
        },
        {
            id : 3,
            item : "Women"
        },
        {
            id : 4,
            item : "Kids"
        }
    ]);

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);


    const handleHover = () => {

      setHover(!hover);
  }

    
  const handleClick = () => {

    setClick(!click);
}

  return (
    <section className=" flex md:justify-around  justify-between p-2 shadow-md relative">
      <Link to="/">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="logo-img" />
        <p className="text-zinc-950 text-3xl font-semibold">SHOPPER</p>
      </div>
      </Link>

      <div>
        <button className="cursor-pointer text-5xl md:hidden relative right-4 grid place-content-center">
          &#9776;
        </button>
      </div>

      <div className="md:flex justify-end gap-10 hidden">
        <MenuList menu={menu} setMenu={setMenu} listItems={listItems} handleHover={handleHover} hover={hover} click={click} handleClick={handleClick}/>

        <div className="flex items-center gap-4">
        <Link to="/login">
          <button className="w-28 h-9 outline-none border border-gray-300 rounded-full bg-white text-sm hover:bg-gray-100 active:text-gray-400">
            Login
          </button>
          </Link>
          <Link to="/cart">
          <div className="relative">
            <img className=" resize-none" src={cart_icon} alt="cart-icon" />
            <div className="absolute top-0 left-7 w-5 h-5 grid place-content-center rounded-xl bg-red-500 text-white text-xs">
              0
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
