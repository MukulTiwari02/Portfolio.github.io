import React,{useState} from 'react'

const MenuButton = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const menuClickHandler = ()=>{
        const menuButton = document.getElementsByClassName('menu-button-lines')
        const menu = document.getElementById('menu-list')
        // console.log(menu)
        if(!isMenuOpen)
        {
            for(let i=0;i<2;++i){
                menuButton[i].classList.add('menu-button-lines-active')

                // menu.classList.add('vis')
                // menu.style.display = 'block';
                menu.style.height = '100vh';
        }
    }   
        else 
        {  
            for(let i=0;i<2;++i){
                menuButton[i].classList.remove('menu-button-lines-active')
        
            // menu.classList.remove('vis')
            // menu.style.display = 'hidden';
            menu.style.height = '0vh';
        }
    }
        setisMenuOpen((isMenuOpen) => !isMenuOpen)
    } 

  return (
    <>
    <button className='menu-button' onClick={menuClickHandler}>
        <div className="menu-button-lines"></div>
        <div className="menu-button-lines"></div>
    </button>
    <ul className="menu-list" id='menu-list'>
        <li className="menu-list-items nav-links"><a href="#hero">Home</a></li>
        <li className="menu-list-items nav-links"><a href="#About">About</a></li>
        <li className="menu-list-items nav-links"><a href="#Projects">Projects</a></li>
        <li className="menu-list- nav-links"><a href="#Contact">Contact</a></li>
    </ul>
    </>
  )
}

export default MenuButton