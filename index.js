// import React from 'readt';
// import ReactDOM from 'react-dom';


function helloWolrdButton () {
    const [isClick, setClickState] = React.useState(false);
    const text = isClick ? "Bye World!" : "Hello World!";

    return React.createElement(
        "button",
        {onClick: () => setClickState(!isClick),},
        text
    );
};

const rootContainer = document.getElementById('react-root');
ReactDOM.render(React.createElement(helloWolrdButton), rootContainer);

