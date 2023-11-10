import React from 'react'
import ListItem from './ListItem'

const MenuList = ({ menu, setMenu, listItems, hover, handleHover, click, handleClick}) => {
  return (
    <ul className="flex  items-center list-none gap-9 text-gray-700 text-md font-medium font-poppins">
      {listItems.map(item => (
        <ListItem 
        menu={menu} 
        setMenu={setMenu} 
        item={item} 
        key={item.id} 
        hover={hover} 
        handleHover={handleHover} 
        click={click} 
        handleClick={handleClick}/>
      ))}
    </ul>
  )
}

export default MenuList

