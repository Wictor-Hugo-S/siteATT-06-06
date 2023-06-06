import { AiOutlineWifi } from 'react-icons/ai';
import { FaHeadset } from 'react-icons/fa'
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { BsClockHistory } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'


import './style.css'
import Efeitos from '../Efeitos';
import Rotate from 'react-reveal/Rotate';
import Flash from 'react-reveal/Flash';
import Roll    from 'react-reveal/Roll';

const array = [
    {
        id: 1,
        titleMega: '20',
        preco: '45',
        centavos:'00'


    },
    {
        id: 2,
        titleMega: '30',
        preco: '50',
        centavos:'00'


    },
    {
        id: 3,
        titleMega: '50',
        preco: '60',
        centavos:'00'


    },
    {
        id: 4,
        titleMega: '100',
        preco: '79',
        centavos:'99'


    },
    {
        id: 5,
        titleMega: '200',
        preco: '99',
        centavos:'99'


    },
    {
        id: 6,
        titleMega: '300',
        preco: '109',
        centavos:'99'


    }
    
]


const Cards = () => {


    return (



        <>
      
       
            <div className='cards-valores'>
        
                <div className='title-cards'>
               
                    <div className='wrapper-title-cards'>
                        <Flash>
                            <h1>Nossos</h1>
                            <span>Planos</span>
                        </Flash>
                    </div>
                   
                </div>
              

                <div className='container-cards'>
              
                    <div className='flex-box'>


                    {array.map((array) => {
                        return (
                            <>
                              <Roll>
                                
                                <div className='boxes'>
                                    <div className="teste">
                                        <div className='titile-boxes'>
                                            <span>{array.titleMega}</span>
                                            <div className='border-botton'></div>
                                            <span>MEGA</span>

                                        </div>
                                    </div>


                                    <div className="boxes-precos">

                                        <div className="preco">

                                            <div className="wrapper-preco">
                                                <span>R$</span>
                                                <p>{array.preco}</p>
                                                <div className="valores ">
                                                    <span>,{array.centavos}</span>
                                                    <span>/mês</span>
                                                </div>
                                            </div>

                                            <div className="descricao-preco">
                                                <div className='wrapper-descricao'>
                                                    <BsFillRocketTakeoffFill fill='#0c2633' size={22} />
                                                    <span>100% Fibra Óptica</span>

                                                </div>
                                                <div className='border-botton'></div>
                                            </div>
                                            <div className="descricao-preco">
                                                <div className='wrapper-descricao'>
                                                    <AiOutlineWifi fill='#0c2633' size={22} />
                                                    <span>Wifi Grátis</span>
                                                </div>
                                                <div className='border-botton'></div>
                                            </div>
                                            <div className="descricao-preco">
                                                <div className='wrapper-descricao'>
                                                    <FaHeadset fill='#0c2633' size={22} />
                                                    <span>Suporte Especializado</span>

                                                </div>
                                                <div className='border-botton'></div>
                                            </div>

                                            <div className="descricao-preco">
                                                <div className='wrapper-descricao'>
                                                    <BsClockHistory fill='#0c2633' size={22} />
                                                    <span>Instalação Imediata</span>

                                                </div>
                                                <div className='border-botton'></div>
                                            </div>



                                        </div>

                                    </div>
                                    <div className='button-card'>
                                        <button >
                                            <div className='icon-buton-card'>
                                                <FaWhatsapp></FaWhatsapp>

                                                Contratar
                                            </div>
                                        </button>
                                    </div>

                                </div>

                                </Roll>
                            </>
                        )
                    })}


                </div>
                
                </div>
            </div >



            {/* <div className='cards-valores'>
                <div className="container-cards">

                   

                    <div className='boxes'>
                        <div className="teste">
                            <div className='titile-boxes'>
                                <span>100</span>
                                <div className='border-botton'></div>
                                <span>MEGA</span>


                            </div>


                        </div>


                        <div className="boxes-precos">

                            <div className="preco">

                                <div className="wrapper-preco">
                                    <span>R$</span>
                                    <p>99</p>
                                    <div className="valores">
                                        <span>,90</span>
                                        <span>/mês</span>
                                    </div>
                                </div>

                                <div className="descricao-preco">
                                    <div className='wrapper-descricao'>
                                        <BsFillRocketTakeoffFill fill='#0c2633' size={22} />
                                        <span>100% Fibra Óptica</span>

                                    </div>
                                    <div className='border-botton'></div>
                                </div>



                                <div className="descricao-preco">
                                    <div className='wrapper-descricao'>
                                        <AiOutlineWifi fill='#0c2633' size={22} />
                                        <span>Wifi Grátis</span>
                                    </div>
                                    <div className='border-botton'></div>
                                </div>




                                <div className="descricao-preco">
                                    <div className='wrapper-descricao'>
                                        <FaHeadset fill='#0c2633' size={22} />
                                        <span>Suporte Especializado</span>

                                    </div>
                                    <div className='border-botton'></div>
                                </div>



                                <div className="descricao-preco">
                                    <div className='wrapper-descricao'>
                                        <BsClockHistory fill='#0c2633' size={22} />
                                        <span>100% Fibra Óptica</span>

                                    </div>
                                    <div className='border-botton'></div>
                                </div>

                            </div>
                            

                        </div>
                        
                        <div className='button-card'>

                          
                        <button > 
                        <div className='icon-buton-card'>
                           <FaWhatsapp></FaWhatsapp> 
                           
                            Contratar
                            </div>
                            </button>
                            
                         
                        </div>
                    </div>


                </div>

            </div>


 */}



        </>
    )

}



export default Cards;