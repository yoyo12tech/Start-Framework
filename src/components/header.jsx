import React, {useState,useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom';


function Header(){

    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{ //component did mount
        const handleScroll = () => {
            setScrolled(window.scrollY>10);
            console.log(window.scrollY);
    
        };

        window.addEventListener('scroll',handleScroll);

        return () =>  window.removeEventListener('scroll',handleScroll); //component will un-mount


    },[])//component did mount
    
    return(
        <>

             <nav className={`navbar navbar-expand-md text-center  sticky-top  ${scrolled? 'py-1':'py-3'}`}>
                <div className="container text-uppercase fw-bold">
                    <NavLink to={"/"} className="navbar-brand fs-3 text-white" href="#">Start Framework
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to={"about"} className="nav-link text-white mt-3 mt-md-0" aria-current="page" href="/about">About</NavLink>
                            <NavLink to={"portfolio"} className="nav-link text-white mt-3 mt-md-0 mx-md-4" href="#">Portfolio</NavLink>
                            <NavLink to={"contact"} className="nav-link mt-3 mt-md-0 text-white" href="#">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header