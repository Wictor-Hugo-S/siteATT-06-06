import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/ButtonWhats";


export default function Atedimento(){

    return (
        <>
           <Header/>
           <div className='menu'>
                <Menu />

            </div>
           <Contato/>
           <ButtonWhats/>
           <Footer/>
        </>
    )

}