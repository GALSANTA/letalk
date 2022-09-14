import React from 'react';

function Header(props) {
    return(
        <header className="header">
            {
                props.children
            }
        </header>
    )
}

function Main(props) {
    return(
        <main className="main">
            {
                props.children
            }
        </main>
    )
}


function Footer(props) {
    return(
        <footer className="footer">
            {
                props.children
            }
        </footer>
    )
}


export {
    Footer,
    Header,
    Main
}