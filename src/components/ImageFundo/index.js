import Image1 from '../../images/image-1.jpg'
import conectividade from '../../images/conectividade.png'
import Menu from '../Menu';

import Rotate from 'react-reveal/Rotate'

import './style.css'
import Carrosel from '../Carrosel';
const ImageFundo = () => {
    return (
        <>
               
            <div className="wrapper-capa">
                <div className='imagem-fundo'>
                   
                        <Carrosel />
                </div>
               
                <div className='menu'>
                    <Menu></Menu>

                </div>

                {/*              
                <div className='texto-image'>
                    <div className="container-texto-image">
                        <button className="fibra">Fibra Óptica</button>

                        <div className="descricao-image-fundo">
                            <div>
                                <span>Muito mais</span>
                            </div>
                            <div className='icon-texto'>
                               <img src={conectividade}></img>
                            </div>


                        </div>
                        <button className="assine-ja">Assine Já</button>


                    </div>
                </div> */}




            </div>
           




        </>
    )

}













export default ImageFundo;