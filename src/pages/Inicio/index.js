

import Header from "../../components/Header"
import ImageFundo from "../../components/ImageFundo"



import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { BsClockHistory } from 'react-icons/bs'
import { AiOutlineWifi } from "react-icons/ai"
import { FaHeadset, FaPiggyBank } from 'react-icons/fa'

import { AiOutlineArrowRight } from 'react-icons/ai'

import { RiGamepadLine } from 'react-icons/ri'
import Efeitos from "../../components/Efeitos";
import Cards from "../../components/Cards"
import Contato from "../../components/Contato"
import Footer from "../../components/Footer"

import Flash from 'react-reveal/Flash'
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';
import Roll    from 'react-reveal/Roll';




import './style.css'
import ButtonWhats from "../../components/ButtonWhats";


const image = [
    <BsClockHistory fill="#fb2f3f" size={35} />,
    <FaPiggyBank fill="#fb2f3f" size={35} />,
    <AiOutlineWifi fill="#fb2f3f" size={35} />,
    <BsFillRocketTakeoffFill fill="#fb2f3f" size={35} />,
    <FaHeadset fill="#fb2f3f" size={35} />,
    <RiGamepadLine fill="#fb2f3f" size={35} />



]

const products = [

    {
        id: 0,
        icon: image[0],
        title1: 'Instalação',
        title2: 'imediata'

    },
    {
        id: 1,
        icon: image[1],
        title1: 'Custo',
        title2: 'benefício'

    },
    {
        id: 2,
        icon: image[2],
        title1: 'Wifi',
        title2: 'grátis'

    },
    {
        id: 3,
        icon: image[3],
        title1: '100%',
        title2: 'Fibra óptica'

    },
    {
        id: 4,
        icon: image[4],
        title1: 'Atendimento',
        title2: 'especializado'

    },
    {
        id: 5,
        icon: image[5],
        title1: 'Otimizada',
        title2: 'para games'

    }

]


export default function Inicio() {

    return (
        <div>
            <section className="header">
                <Header></Header>
                <ImageFundo></ImageFundo>
                <ButtonWhats />
            </section>


            <section className="cards">
                <Cards></Cards>

            </section>


            {/* <span style="-webkit-text-stroke-width: 2px;-webkit-text-stroke-color: #F27116; color: #fff;">VANTAGENS</span> */}

            <section className="produtos">

                <div className="container-produtos">
                    <div className="title-produtos">
                        <Flash>
                            <h1>VANTAGENS</h1>
                            <span>DE SER SEU PROVEDOR</span>
                        </Flash>
                    </div>

                    <div className="boxes-produtos">
                        <Roll >
                            {products.map((products => {

                                return (
                                    <>


                                        <div key={products.id} className="wrapper-produtos">

                                            {products.icon}
                                            <span>{products.title1}</span>
                                            <span>{products.title2}</span>

                                        </div>
                                    </>
                                )
                            }))}
                        </Roll >
                    </div>


                </div>

            </section>


            <section className="sua-empresa">

                <div className="container-sua-empresa">

                    <div className="title-sua-empresa">
                        <Fade right>
                            <span>Para sua</span>
                            <h1>Empresa</h1>
                            <p>Contrate pelo plano ideal para acelerar seu negócio internet fibra óptica é na Systec.</p>
                        </Fade>
                    </div>
                    <Fade left>
                        <div className="button-sua-empresa">

                            <button>

                                Saiba Mais
                                <AiOutlineArrowRight
                                    className="icon-arrow-right" size={28} />

                            </button>
                        </div>
                    </Fade>
                </div>

            </section>


            <section className="contato">

                <Contato />
            </section>

            <section className="footer">
                <Footer />
            </section>




        </div >







    )

}