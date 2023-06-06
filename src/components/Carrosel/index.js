
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import { IoMdAddCircleOutline } from 'react-icons/io'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "swiper/css/effect-fade";
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate'
import './style.css'
import conectividade from '../../images/conectividade.png'

const Carrosel = () => {
    return (
        <>

            <Swiper
            
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                navigation={true}
                effect={"fade"}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                direction={'horizontal'}
                reverseDirection={true}
                className='swiper-container'
                >
                  

                <SwiperSlide className='slide-item'>
                    
                    <div className='wrapper-imagem-fundo'>
                       <div>    
                       
                            <img src={require('../../images/image-2.jpg')} alt=''>
                            
                            </img>
                            
                            </div>
                    </div>


                    <div className='texto-image'>
                        <div className="container-texto-image ">
                     

                            <div className='wrapper-texto-image-1'>
                                <button className="fibra">Fibra Óptica</button>
                            </div>

                            <div className="descricao-image-fundo">
                                <div className='sub-title-descricao '>
                                    <span>Muito mais</span>
                                </div>
                                <div className='icon-texto-1 '>
                                    <div className='icon-slide-1'>
                                        <IoMdAddCircleOutline fill='#fff' />
                                    </div>
                                    <h1>VELOCIDADE</h1>
                                </div>


                            </div>
                            <div className='button-texto-image-1'>
                                <button className="assine-ja">Assine Já</button>
                            </div>
                          
                        </div>
                    </div>



                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                   
                        <img src={require('../../images/image-3.jpg')} alt=''></img>
                  
                    <div className='texto-image-2'>
                        <div className="container-texto-image-2">
                          
                            <div className='wrapper-texto-image-2'>
                                <button className="fibra">Fibra Óptica</button>
                            </div>
                            <div className="descricao-image-fundo">
                                <div className='sub-title-descricao' >
                                    <span>Muito mais</span>
                                </div>

                                <div className='icon-texto'>
                                    <div className='icon-slide'>
                                        <IoMdAddCircleOutline fill='#fff' />
                                    </div>
                                    <h1>CONECTIVIDADE</h1>
                                </div>


                            </div>
                            <div className='button-texto-image-2'>
                                <button className="assine-ja">Assine Já</button>

                            </div>
                       

                        </div>
                    </div>

                </SwiperSlide>


                <SwiperSlide className='slide-item'>
              
                    <img src={require('../../images/image-1.jpg')} alt='teste2'></img>
                
                    <div className='texto-image'>
                        <div className="container-texto-image">
                        
                            <div className='wrapper-texto-image-1'>
                                <button className="fibra">Fibra Óptica</button>
                            </div>

                            <div className="descricao-image-fundo">
                                <div className='sub-title-descricao'>
                                    <span>Muito mais</span>
                                </div>
                                <div className='icon-texto-1'>
                                    <div className='icon-slide-1'><IoMdAddCircleOutline fill='#fff' /></div>
                                    <h1>ESTABILIDADE</h1>
                                </div>


                            </div>
                            <div className='button-texto-image-1'>
                                <button className="assine-ja">Assine Já</button>
                            </div>
                       
                        </div>
                       
                    </div>

                </SwiperSlide>
               
            </Swiper>
           
        </>
    )

}
export default Carrosel