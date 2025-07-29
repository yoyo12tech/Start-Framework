import React, { useState } from 'react';
import MaverickStarv from '../components/maverickStarv'
function Contact(){

    const [nvalue,nsetMove] = useState("");
    const [avalue,asetMove] = useState("");
    const [evalue,esetMove] = useState("");
    const [pvalue,psetMove] = useState("");


    
    return(
        <>
            <div className="contact">
                <div className="container text-center py-5 px-3 px-lg-4">
                    <h1 className=' fw-bold' style={{color:' #2C3E50'}}>CONTACT COMPONENT</h1>
                    <MaverickStarv  color={' #2C3E50'}/>
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-7 mx-auto">
                            <form onSubmit={e => (e.preventDefault(), console.log('Form submitted!'))} className="form d-flex flex-column justify-content-between align-items-start">

                                <label className={ (nvalue =='username') ? '':'moveLabel'} htmlFor="username">User Name</label>
                                <input className=' z-1' onChange ={()=> nsetMove('username')} type="text" id='username' placeholder='User Name' />

                                <label className={ (avalue =='userage') ? '':'moveLabel'} htmlFor="userage">User Age</label>
                                <input className=' z-1' onChange ={()=> asetMove('userage')} type="number" id='userage' placeholder='User Age' />

                                <label className={ (evalue =='email') ? '':'moveLabel'} htmlFor="email">User Email</label>
                                <input className=' z-1' onChange ={()=> esetMove('email')} type="email" id='email' placeholder='User Email' />

                                <label className={ (pvalue =='pass') ? '':'moveLabel'} htmlFor="pass">User Password</label>
                                <input className=' z-1' onChange ={()=> psetMove('pass')} type="password" id='pass' placeholder='User Password' />

                                <button className='mt-4'>Send Message</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;