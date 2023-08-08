import React, {Fragment, useState} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";

import {Link, NavLink} from "react-router-dom";
import SearchModal from "../SearchModal";


const menus = [
    {
        id: 1,
        linkText: 'Główna',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 11,
                link: '/',
                linkText: 'Frysztak 23'
            },
            
        ]
    },
    
  
    {
        id: 2,
        linkText: 'Wiadomości',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 41,
                link: '/local',
                linkText: 'Lokalne'
            },
           
    
        ]
    },
    {
        id: 3,
        linkText: 'O nas',
        link: '/about'
    },

   
   
    {
        id: 4,
        linkText: 'Kontakt',
        link: '/contact'
    },
];
const menusDark = [
    {
        id: 1,
        linkText: 'Home',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 11,
                link: '/',
                linkText: 'Home 1'
            },
     
        ]
    },
   
];

const MainMenu = ({className, dark}) => {
    const [searchShow, setSearchShow] = useState(false);
    const [setSideShow] = useState(false);

    const arr = dark ? menusDark : menus;
    return (
        <Fragment>
            <div className={`main-menu ${className ? className : ''}`} id="header">
                <Link to="#top" className="up_btn up_btn1">
                    <FontAwesome name="chevron-double-up"/>
                </Link>
                <div className="main-nav clearfix is-ts-sticky">
                    <div className="container">
                        <div className="row justify-content-between">
                            <nav className="navbar navbar-expand-lg col-lg-8 align-self-center">
                                <div className="site-nav-inner">
                                    <button className="navbar-toggler" onClick={() => setSideShow(true)}>
                                        <FontAwesome name="bars"/>
                                    </button>
                                    <div id="navbarSupportedContent"
                                         className="collapse navbar-collapse navbar-responsive-collapse">
                                        <ul className="nav navbar-nav" id="scroll">
                                            {arr.length > 0 ? arr.map((item, i) => (
                                                <li key={i}
                                                    className={`
                                                ${item.child ? 'dropdown' : ''}
                                                nav-item`}>
                                                    {item.child ? <NavLink onClick={e => e.preventDefault()} to="/"
                                                                           className="menu-dropdown"
                                                                           data-toggle="dropdown">{item.linkText}
                                                            <FontAwesome
                                                                name={item.icon}/></NavLink>
                                                        : <NavLink to={item.link} className="menu-dropdown"
                                                                   data-toggle="dropdown">{item.linkText} <FontAwesome
                                                            name={item.icon}/></NavLink>}

                                                    {item.child ?
                                                        <ul className="dropdown-menu" role="menu">
                                                            {item.submenu.map((sub_item, i) => (
                                                                <li key={i}
                                                                    className={`${sub_item.child ? 'dropdown-submenu' : null}
                                                        `}>
                                                                    {sub_item.child ?
                                                                        <NavLink onClick={e => e.preventDefault()}
                                                                                 to="/">{sub_item.linkText}</NavLink>
                                                                        : <NavLink
                                                                            to={sub_item.link}>{sub_item.linkText}</NavLink>}
                                                                    {sub_item.third_menu ?
                                                                        <ul className="dropdown-menu">
                                                                            {sub_item.third_menu.map((third_item, i) => (
                                                                                <li key={i}><NavLink
                                                                                    to={third_item.link}>{third_item.linkText}</NavLink>
                                                                                </li>
                                                                            ))}
                                                                        </ul> : null}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        : null
                                                    }
                                                </li>
                                            )) : null}
                                        </ul>
                                    </div>
                                    
                                </div>
                            </nav>
                            <div className="col-lg-4 align-self-center">
                                <div className="menu_right">
                                    <div className="users_area">
                                       
                                    </div>
                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {searchShow ?
                <SearchModal setSearchShow={setSearchShow} searchShow={searchShow}/>
                : null
            }
        </Fragment>
    );
};

export default MainMenu;