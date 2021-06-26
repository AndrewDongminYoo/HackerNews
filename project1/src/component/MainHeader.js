import React, { useState } from 'react';


function MainHeader () {

    const [click, setClick] = useState(false);
    const buttonText = click ? "Click Me!!" : "I'm Clicked"

    return (
        <div>
            <h1>Hello World!</h1>
            <button
                onClick={ () => {setClick(!click)} }>
                { buttonText }
            </button>
        </div>
    );
};

export default MainHeader;