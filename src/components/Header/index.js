import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Efeitos from '../Efeitos';
import Fade from 'react-reveal/Fade';
import './style.css'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>

            <div className="cabecalho">

                <div className="container">
                    <Fade right>
                        <div className="texto-principal">

                            {/* <div className="text-icon"><FaWhatsapp></FaWhatsapp></div> */}
                            <button>
                                <div className="texto-icon"> <FaWhatsapp />
                                </div>
                                Fale conosco pelo WhtasApp
                            </button>

                        </div>
                    </Fade>
                    <Fade left>
                        <div className="icon">

                            <div className="icon-whats">
                                <FaWhatsapp />

                            </div>

                            <div className="icon-insta">
                                <FaInstagram />
                            </div>
                            <div className="icon-face">
                                <FaFacebook />
                            </div>

                        </div>
                    </Fade>
                    <Fade left>
                        <div className="descricao-header">

                            <button Link to="atendimento">Atendimento</button>
                            <button>Área Do cliente </button>
                            <button>2 Via do Boleto</button>

                        </div>
                    </Fade>

                </div>
            </div>



        </>

    )

}

export default Header;