import Menu from '../Menu/'

import './style.css'

const ImagemCapa2 = ({ name, img }) => {
    return (
        <>

            <div className='menu'>
                <Menu />
            </div>

            <div className='imagem-fundo-paginas'>
            <img src={img}></img>
                <div className='wrapper-imagem-fundo-paginas'>

               
                    <div className='imagem-capa-fundo-title'>

                        <h1>{name}</h1>

                    </div>
                </div>
            </div>
         


        </>
    )
}
export default ImagemCapa2