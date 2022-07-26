// import React from "react"
// import ReactDOM from "react-dom"

function MainContent() {
    return (
        <nav>
            <h1>Let's practice making a Nav</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}


ReactDOM.render(
        <MainContent />,
    document.getElementById("root")
)