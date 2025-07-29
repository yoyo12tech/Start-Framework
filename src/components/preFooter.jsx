import React from 'react'

function PreFooter(){
    return(
        <>
            <div className="PreFooter text-white" style={{backgroundColor:'#2C3E50'}}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="location text-center">
                                <h4>LOCATION</h4>
                                <p>2342 Youssef Drive</p>
                                <p>Khaled,YI 6532</p>
                            </div>
                        </div>
                        <div className="col-md-4 py-md-0 py-5">
                            <div className="around text-center">
                                <h4>AROUND THE WEB</h4>
                                <ul className='list-unstyled d-flex  justify-content-evenly align-items-center w-75 mx-auto mt-4'>
                                    <li className=' d-flex justify-content-center align-items-center border border-white border-3 p-1' >
                                       <i class="fa-brands m-1 fa-facebook" ></i>
                                    </li> 
                                    <li className=' d-flex justify-content-center align-items-center border border-white border-3 p-1'>
                                        <i class="fa-brands m-1 fa-x-twitter"></i>                                    
                                    </li>
                                    <li className=' d-flex justify-content-center align-items-center border border-white border-3 p-1'>
                                       <i class="fa-solid m-1 fa-globe"></i>
                                    </li>
                                    <li className=' d-flex justify-content-center align-items-center border border-white border-3 p-1'>
                                       <i class="fa-brands m-1 fa-linkedin-in"></i>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about text-center">
                                <h4>ABOUT FREELANCER</h4>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default PreFooter