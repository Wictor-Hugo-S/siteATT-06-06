
import logo from '../../images/logo.jpg'
import { FaWhatsapp } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdOutlinePayments } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'


import './style.css'
import Efeitos from '../Efeitos'
import Fade from 'react-reveal/Fade';
const listaContatos = [
    {
        id: 0,
        nome: 'Sobre nós'
    },
    {
        id: 1,
        nome: 'Para você'
    },
    {
        id: 2,
        nome: 'Para sua empresa'
    },
    {
        id: 3,
        nome: 'Atendimento',
        link: '/atendimento'

    },
    [
        {
            id: 4,
            nome: 'Teste sua conexão'
        },
        {
            id: 5,
            nome: 'Contrato SCM'
        }
    ]

]



const buttons = [
    {
        icon: <MdOutlinePayments />,
        nome: '2 Via de boleto'

    },
    {
        icon: <BsFillPeopleFill />,
        nome: 'Área do cliente'
    },
    {
        icon: <FaWhatsapp />,
        nome: 'Fale no whatsapp'
    }
]


const Contato = () => {



    //  console.log(listaContatos[4][0].nome)
    const arrayFiltrado2 = listaContatos[4].filter((array => array.id > 3))



    const arrayFiltrado = listaContatos.filter((array => array.id <= 4))
    return (
        <>
            <div className='contato'>
                <div className="container-contato">

                    <div className="wrapper-contato">

                        <div className="logo-contato">

                            <a href="/">
                                <Fade right>
                                    <img src={logo} alt="Logo" />
                                </Fade>
                            </a>



                        </div>
                        <div className="lista-contatos">
                            <Fade left>
                                <ul>
                                    {
                                        arrayFiltrado.map((item) => {

                                            return (
                                                <>
                                                    <li> <a href={item.link}>{item.nome}</a></li>
                                                </>
                                            )
                                        })

                                    }
                                </ul>

                                <ul>
                                    {
                                        arrayFiltrado2.map((item) => {

                                            return (
                                                <>
                                                    <li> <a>{item.nome}</a></li>
                                                </>
                                            )
                                        })

                                    }
                                </ul>
                            </Fade>
                        </div>

                        <div className="button-contato">
                            {buttons.map((item, id) => {
                                return (
                                    <>
                                        <Fade left>
                                            <button key={id}>
                                                {item.icon}
                                                {item.nome}
                                            </button>
                                        </Fade>
                                    </>
                                )
                            })}


                        </div>

                    </div>

                </div>
            </div>
        </>
    )

}



export default Contato