import React from 'react'
import {Link} from "react-router-dom"

const ListItem = ({menu, setMenu, item, hover, handleHover, click, handleClick}) => {


    

    return (
        <li 
        className="  hover:mb-3 duration-200  active:text-gray-400  flex flex-col items-center justify-center gap-1 cursor-pointer"  
        onMouseEnter={() => { setMenu(item.item); handleHover()}} 
        onMouseLeave={() => {setMenu(""), handleHover()}}
        onClick={() => {handleClick(); setMenu(item.item)}}>
            <Link 
            to={item.item === "Shop" ? "/" : `/${item.item.toLowerCase()}`}>
            {item.item}
            </Link>{(menu === item.item && hover === true) ? <hr className=" border-1 w-10/12 max-h-1.5 rounded-lg border-red-500" /> : <></>}
        </li>
    )
}


export default ListItem


