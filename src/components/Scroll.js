import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY:'Scroll', border: '1px colid black', height: '800px'}}>
            {props.children}
        </div>
);
}
export default Scroll;