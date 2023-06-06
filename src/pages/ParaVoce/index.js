import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Cards from "../../components/Cards";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/ButtonWhats";
import ImagemCapa2 from "../../components/ImagemCapa2";

import image3 from '../../images/image-3.jpg'

export default function ParaVoce() {
    const imagem_fundo = image3

    return (
        <>
            


            <section className="header-sobrenos">
                <Header />

                <ImagemCapa2 name='Para Você' img={imagem_fundo} />
            </section>


        


            <Cards />
            <Contato />
            <ButtonWhats />
            <Footer />
        </>
    )

}