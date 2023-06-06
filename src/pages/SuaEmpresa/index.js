import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/ButtonWhats";
import ImagemCapa2 from "../../components/ImagemCapa2";

import { BsFillRocketTakeoffFill } from 'react-icons/bs';

import './style.css'

import netempresarial from '../../images/netempresarial.png'
import image3 from '../../images/image-3.jpg'

export default function SuaEmpresa() {
    const imagem_fundo = image3

    return (
        <>

            <section className="header-sobrenos">
                <Header />

                <ImagemCapa2 name='Para sua empresa' img={imagem_fundo} />
            </section>

            <section className="conteudo-sua-empresa">
                <div className="container-conteudo-sua-empresa">
                    <div className="title-conteudo-sua-empresa">
                        <h1>Internet</h1>
                        <span>Empresasrial</span>
                    </div>
                    <div className="wrapper-conteudo-sua-empresa">
                        <div className="box-conteudo-sua-empresa">
                            <div className="icon-box-sua-empresa">
                                <BsFillRocketTakeoffFill size={50}/>
                            </div>
                            <div className="title-box-sua-empresa">
                                <span>100% Fibra Óptica</span>
                                <div className="description-box-sua-empresa">
                                    <p>Internet fibra óptica de ponta a ponta, mais velocidade para sua empresa.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="imagem-conteudo-sua-empresa">
                            <img src={netempresarial}></img>
                        </div>
                    </div>
                </div>

            </section>
            <Contato />
            <ButtonWhats />
            <Footer />
        </>
    )

}