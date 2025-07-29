import React from 'react'

function MaverickStar(props){
    return(
        <>
            <div className="star-icon py-1" style={{color:props.color}}>
                <i class="fa-solid fa-star"></i>
            </div>
        </>
    )
}

export default MaverickStar;