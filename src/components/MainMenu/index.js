import React, {Fragment, useState} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import tempIcon from '../../doc/img/icon/temp.png';
import {Link, NavLink} from "react-router-dom";
import SearchModal from "../SearchModal";
import SidebarMenu from "../SidebarMenu";

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
        linkText: 'Strona',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 21,
                link: '/about',
                linkText: 'O nas'
            },
    
            {
                id: 23,
                link: '/contact',
                linkText: 'Kontakt'
            },
           
        ]
    },
   /*} {
        id: 3,
        linkText: 'Posts',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 31,
                child: true,
                linkText: 'General Posts',
                third_menu: [
                    {
                        id: 311,
                        link: '/post1',
                        linkText: 'Post 1',
                    },
                    {
                        id: 312,
                        link: '/post2',
                        linkText: 'Post 2',
                    },
                    {
                        id: 313,
                        link: '/post3',
                        linkText: 'Post 3',
                    },
                ],
            },
            {
                id: 32,
                child: true,
                linkText: 'Video Posts',
                third_menu: [
                    {
                        id: 321,
                        link: '/video_post1',
                        linkText: 'Video Style 1',
                    },
                    {
                        id: 322,
                        link: '/video_post2',
                        linkText: 'Video Style 2',
                    },
                    {
                        id: 323,
                        link: '/video_post3',
                        linkText: 'Video Style 3',
                    },
                ],
            },
            {
                id: 33,
                child: true,
                linkText: 'Audio Posts',
                third_menu: [
                    {
                        id: 331,
                        link: '/audio_post1',
                        linkText: 'Audio Style 1',
                    },
                    {
                        id: 332,
                        link: '/audio_post2',
                        linkText: 'Audio Style 2',
                    },
                    {
                        id: 333,
                        link: '/audio_post3',
                        linkText: 'Audio Style 3',
                    },
                ],
            },
            {
                id: 34,
                child: true,
                linkText: 'Sidebars',
                third_menu: [
                    {
                        id: 341,
                        link: '/post1',
                        linkText: 'Right Sidebar',
                    },
                    {
                        id: 342,
                        link: '/left_post2',
                        linkText: 'Left Sidebar',
                    },
                    {
                        id: 343,
                        link: '/post2',
                        linkText: 'No Sidebar',
                    },
                ],
            },
        ]
    },*/
    {
        id: 4,
        linkText: 'Wiadomości',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 41,
                link: '/business',
                linkText: 'Lokalne'
            },
            {
                id: 42,
                link: '/entertainment',
                linkText: 'Podkarpackie'
            },
            {
                id: 43,
                link: '/features',
                linkText: 'Krajowe'
            },
         
    
        ]
    },
    {
        id: 5,
        linkText: 'Świat',
        link: '/world'
    },
   
   
    {
        id: 7,
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
            {
                id: 12,
                link: '/dark',
                linkText: 'Home Dark'
            },
            {
                id: 13,
                new: true,
                link: '/home-two',
                linkText: 'Home 2'
            },
            {
                id: 14,
                link: '/home-three',
                linkText: 'Home 3'
            },
        ]
    },
    {
        id: 2,
        linkText: 'Pages',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 21,
                link: '/dark/about',
                linkText: 'About'
            },
            {
                id: 22,
                link: '/dark/archive',
                linkText: 'Archive'
            },
            {
                id: 23,
                link: '/dark/contact',
                linkText: 'Contact Us'
            },
            {
                id: 24,
                link: '/dark/404',
                linkText: '404'
            },
        ]
    },
    {
        id: 3,
        linkText: 'Posts',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 31,
                child: true,
                linkText: 'General Posts',
                third_menu: [
                    {
                        id: 311,
                        link: '/dark/post1',
                        linkText: 'Post 1',
                    },
                    {
                        id: 312,
                        link: '/dark/post2',
                        linkText: 'Post 2',
                    },
                    {
                        id: 313,
                        link: '/dark/post3',
                        linkText: 'Post 3',
                    },
                ],
            },
            {
                id: 32,
                child: true,
                linkText: 'Video Posts',
                third_menu: [
                    {
                        id: 321,
                        link: '/dark/video_post1',
                        linkText: 'Video Style 1',
                    },
                    {
                        id: 322,
                        link: '/dark/video_post2',
                        linkText: 'Video Style 2',
                    },
                    {
                        id: 323,
                        link: '/dark/video_post3',
                        linkText: 'Video Style 3',
                    },
                ],
            },
            {
                id: 33,
                child: true,
                linkText: 'Audio Posts',
                third_menu: [
                    {
                        id: 331,
                        link: '/dark/audio_post1',
                        linkText: 'Audio Style 1',
                    },
                    {
                        id: 332,
                        link: '/dark/audio_post2',
                        linkText: 'Audio Style 2',
                    },
                    {
                        id: 333,
                        link: '/dark/audio_post3',
                        linkText: 'Audio Style 3',
                    },
                ],
            },
            {
                id: 34,
                child: true,
                linkText: 'Sidebars',
                third_menu: [
                    {
                        id: 341,
                        link: '/dark/post1',
                        linkText: 'Right Sidebar',
                    },
                    {
                        id: 342,
                        link: '/dark/left_post2',
                        linkText: 'Left Sidebar',
                    },
                    {
                        id: 343,
                        link: '/dark/post2',
                        linkText: 'No Sidebar',
                    },
                ],
            },
        ]
    },
    {
        id: 4,
        linkText: 'Categories',
        child: true,
        icon: 'angle-down',
        submenu: [
            {
                id: 41,
                link: '/dark/local',
                linkText: 'Local'
            },
            {
                id: 42,
                link: '/dark/entertainment',
                linkText: 'Entertainment'
            },
            {
                id: 43,
                link: '/dark/features',
                linkText: 'Features'
            },
       
           
            {
                id: 45,
                link: '/dark/trending',
                linkText: 'Trending'
            },
        ]
    },
    {
        id: 5,
        linkText: 'World',
        link: '/dark/world'
    },
  
    {
        id: 7,
        linkText: 'Contact',
        link: '/dark/contact'
    },
];

const MainMenu = ({className, dark}) => {
    const [searchShow, setSearchShow] = useState(false);
    const [sideShow, setSideShow] = useState(false);

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
                                    <SidebarMenu sideShow={sideShow} setSideShow={setSideShow} menus={arr}/>
                                </div>
                            </nav>
                            <div className="col-lg-4 align-self-center">
                                <div className="menu_right">
                                    <div className="users_area">
                                       
                                    </div>
                      
                                    <div className="temp d-none d-lg-block">
                                        <div className="temp_wap">
                                            <div className="temp_icon">
                                                <img src={tempIcon} alt="temp icon"/>
                                            </div>
                                            <h3 className="temp_count">13</h3>
                                            <p>Floryda</p>
                                        </div>
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