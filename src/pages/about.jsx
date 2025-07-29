import React from 'react';
import MaverickStar from '../components/maverickStar'

function About(){
    return(
        <>
            <div className="about py-4" style={{backgroundColor:"#1ABC9C",color:'#ffff'}}>
                <div className="container text-center py-5 px-5">
                    <h1 className=' fw-bold'>ABOUT COMPONENT</h1>
                    <MaverickStar color={'rgba(255, 255, 255, 1)'}/>
                    <div className="row mt-5">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <div className="info text-center w-75 m-auto">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="info text-center w-75 m-auto">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;