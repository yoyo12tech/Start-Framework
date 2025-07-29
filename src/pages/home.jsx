import React from 'react';
import userIcon from '../assets/user-icon.svg';
import MaverickStar from '../components/maverickStar';
function Home(){
    return(
        <>
            <div className="home py-4" style={{backgroundColor:"#1ABC9C",color:'#ffff'}}>
                <div className="container py-5">
                    <div className="row">
                        <div className="content text-center">
                            <img className=' pb-3' src={userIcon} alt="user" width={'210rem'}/>
                            <h1 className=' fw-bold'>START FRAMEWORK</h1>
                            <MaverickStar color={'rgba(255, 255, 255, 1)'}/>
                            <p>Graphic Artist - Web Designer - Illustrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;