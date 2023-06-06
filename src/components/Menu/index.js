

import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import React, { useState, useEffect } from "react";

import logo from '../../images/logo.jpg'
import './style.css'
import Efeitos from '../Efeitos';
import Fade from 'react-reveal/Fade';
const menus = [
    {
        isActive: true,
        nome: 'Inicio',
        href: '/'
    },
    {
        isActive: false,
        nome: 'Sobre nós',

        href: '/sobrenos'
    },
    {
        isActive: false,
        nome: 'Para Você',

        href: '/paravoce'
    },
    {
        isActive: false,
        nome: 'Para Sua Empresa',

        href: '/suaempresa'
    },
    {
        isActive: false,
        nome: 'Atendimento',

        href: '/atendimento'
    }
]



const Menu = () => {

    const [handleMenu, setHandleMenu] = useState(false)
    const [isOpen, setIsOpen] = useState(true)

    const [resize, setResize] = useState(false)
    const [tamanho, setTamanho] = useState({ windowWidth: window.innerWidth })

    const handleResize = (e) => {
        setTamanho({ windowWidth: window.innerWidth })
    }

    useEffect(() => {


        window.addEventListener('resize', handleResize)

    }, [])


    useEffect(() => {
        if (tamanho.windowWidth >= 768 && handleMenu === true) {

            setHandleMenu(false)
            setResize(true)
        }


    }, [tamanho])


    function openMenu() {

        setHandleMenu(!handleMenu)
        setIsOpen(!isOpen)

    }

    const [menuState, setMenuState] = useState(menus)

    function handleActive(index) {
        const activeMenu = menuState.map((item, indice) => index === indice ? { ...item, isActive: true }
            : { ...item, isActive: false })

        setMenuState(activeMenu)

    }


    return (
        <>


            <div className='menu'>

                <div className='container'>

                    <div className='logo-menu'>
                        <a href="/">
                            <Fade right>
                                <img src={logo} alt="Logo" />
                            </Fade>
                        </a>
                    </div>


                    <div className='links '>
                        {menus.map((item, index) => {
                            return (
                                <>
                                    <Fade left>
                                        <div key={index}>
                                            <NavLink className='links' to={item.href} activeClassName="active">{item.nome}</NavLink>

                                        </div>
                                    </Fade>
                                </>
                            )
                        })}

                        {/* {menuState.map((item, index) => {
                            console.log(item.nome)
                            return (
                                
                                <>
                                    <div key={index} onClick={() => handleMenu(index)}
                                    className={`${item.isActive ? 'active': ''}`}>

                                    <a>
               
                   {item.nome}</a>
               

                                    </div>
                                </>
                            )
                        })}  */}

                    </div>



                    {/* <style={{color:'#fb2f3f'}}  href="#">Inicio</a>
                    <a href="/sobrenos">Sobre Nós</a>
                    <a href="/paravoce">Para Você</a>
                    <a href="/suaempresa">Sua Empresa</a>
                    <a href="/atendimento">Atendimento</a> */}



                    <div className='button-assine'>
                        <button>Assine Já</button>
                    </div>

                    <div className='menu-mobile'>
                        <Fade left>
                            {handleMenu ?
                                <AiOutlineCloseCircle fill='#fff' size={40}
                                    onClick={openMenu} />
                                : <GiHamburgerMenu fill='red' size={40}
                                    onClick={openMenu} />}

                        </Fade >

                    </div>


                </div>

            </div>
            <div className='container-menu-mobile'>


                {handleMenu && (
                    <>
                        <div className='wrapper-menu-mobile '>
                            {menus.map((item, index) => {
                                return (
                                    <>
                                        <Fade left>
                                            <div className='links-mobile' key={index}>
                                                <NavLink className='links-mobile' to={item.href} activeClassName="active">{item.nome}</NavLink>

                                            </div>
                                        </Fade>
                                    </>
                                )
                            })}



                        </div>
                    </>
                )}

            </div>

        </>
    )
}

export default Menu

