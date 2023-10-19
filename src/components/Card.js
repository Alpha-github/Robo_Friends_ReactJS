import React from 'react';

const Card = ({name, email, id})=>{ //Destructuring using {nm,em,id}
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200&bgset=bg1`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
// Since we use "default" we can only export one component
