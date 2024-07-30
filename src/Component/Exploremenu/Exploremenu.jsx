import React from 'react'
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';

const Exploremenu = ({category,setCategory}) => {

  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore our menu</h1>
        <p className='exploremenu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum doloribus et illum libero officiis quos quas dolores minus quidem?</p>
        <div className="explore-menu-list">
            {menu_list.map ((item,index) => {
                return (
                    <div onClick={()=> setCategory((prev) => prev === item.menu_name ? "null" : item.menu_name)} key={index} className='exploremenu-list-item'>
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div> 
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
