import React, { useState } from 'react';
import MaverickStarv from '../components/maverickStarv'
import port1 from '../assets/port1.png'
import port2 from '../assets/port2.png'
import port3 from '../assets/port3.png'


function Portfolio(){
    const imgs =[port1,port2,port3,port3,port2,port1];

    const [isCurrent,setCurrent]=useState(null);

    function selectImage(img){
        setCurrent(img)
    }

    function unselectImage(){
        setCurrent(null)
    }


     return(
        <>
            <div className="about py-4 position-relative" style={{backgroundColor:"#ffffffff",color:'#ffff'}}>
                <div className="container text-center py-5 px-3 px-lg-4">
                    <h1 className=' fw-bold' style={{color:' #2C3E50'}}>PORTFOLIO COMPONENT</h1>
                    <MaverickStarv  color={' #2C3E50'}/>
                    <div className="row mt-3 px-3 px-lg-4 g-4">
                        {imgs.map((img,index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <div className="port position-relative" onClick={()=>selectImage(img)}>
                                    <img className=' w-100' src={img}  alt="" />
                                    <div className="overlay position-absolute w-100 h-100 bg-hero top-0 start-0">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                        </div>
                        ))}
                    </div>
                </div>
                {isCurrent && ( // lama nrga3 html(jsx) use () but when js use {}
                    <div className="position-fixed overlay-pic top-0 start-0 w-100 h-100" style={{backgroundColor:'rgba(203, 203, 203, 0.75)'}} onClick={()=>unselectImage()}>
                        <div className="container d-flex justify-content-center align-items-center w-100 h-100">
                            <div className="row h-100">
                                <div className="col-12 col-lg-8 text-center mx-auto d-flex justify-content-center align-items-center">
                                        <img className=' w-100  d-flex justify-content-center align-items-center' src={isCurrent}  alt="current-image"/>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </>
    )
}

export default Portfolio;