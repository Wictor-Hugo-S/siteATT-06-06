import Header from "../../components/Header";

import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/ButtonWhats";
import ImagemCapa2 from "../../components/ImagemCapa2";
import Cards from "../../components/Cards";

import image3 from '../../images/image-3.jpg'

import sobrenosimg from '../../images/sobrenosimg.jpg'
import nossamissao from '../../images/nossamissao.jpg'


import './style.css'






export default function SobreNos() {
    const imagem_fundo = image3
    return (


        <>

            <section className="header-sobrenos">
                <Header />

                <ImagemCapa2 name='Sobre Nós' img={imagem_fundo} />
            </section>

            <section className="conteudo-sobre">
                <div className="container-conteudo-sobre">
                    <div className="wrapper-conteudo-sobre">
                        <div className="title-conteudo-sobre">

                            <h1>SOBRE</h1>
                            <span>A Systec</span>
                            <div className="description-conteudo-sobre">

                                <p>A Systec é referência de profissionalismo, competência e excelência em infraestrutura de Internet.</p>

                                <p> Contamos hoje com uma grande equipe de profissionais, com vários anos de experiência e em constante atualização de conhecimento. Uma equipe de técnicos e especialistas, buscando sempre pela excelência.</p>

                                <p> Tudo para oferecer a melhor experiência para nossos clientes e manter a excelência nas soluções oferecidas.</p>
                            </div>

                        </div>

                        <div className="img-conteudo-sobre">
                            <img src={sobrenosimg}></img>
                        </div>

                    </div>

                </div>

            </section>

            <section className="nossa-missao">
                <div className="container-missao">
                    <div className="wrapper-missao">

                        <div className="imagem-missao">
                            <img src={nossamissao}></img>
                        </div>
                        <div className="title-missao">
                            <div className="teste-missao">
                                <h1>Nossa</h1>
                                <span>Missão</span>
                            </div>
                            <div className="descricao-missao">
                                <p>Estamos sempre atualizados das novas tecnologias assim como das necessidades de nossos clientes, para assim podermos desempenhar nosso papel da melhor forma possível, com compromisso e excelência.</p>
                                <div className="sub-descicao-missao">
                                    <div>
                                        <span>Visão: </span>
                                        <p style={{marginBottom:'20px'}}>  Estarmos sempre atualizados das novas tecnologias assim como das necessidades de nossos clientes, para assim podermos desempenhar nosso papel da melhor forma possível, com compromisso e excelência.</p>
                                    </div>
                                    <div>
                                        <span> Valores: </span>
                                        <p> Qualidade, Comprometimento, Parceria, Inovação, Preço Justo, Agilidade.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <ButtonWhats />
            <Contato />
            <Footer />


        </>
    )

}