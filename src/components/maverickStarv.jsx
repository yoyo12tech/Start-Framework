import React from 'react'

function MaverickStarv(props){
    return(
        <>
            <div className="star-iconv py-1" style={{color:props.color}}>
                <i class="fa-solid fa-star"></i>
            </div>
        </>
    )
}

export default MaverickStarv;