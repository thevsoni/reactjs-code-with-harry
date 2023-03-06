import React from 'react'
import './About.css'

export default function About() {
    let myStyle = {
        color: 'red',
        backgroundColor: "green",
        height: "100px",
        width: "100px"
    }
    return (
        <>
            <div style={myStyle}></div>
            <div className="check"></div>
        </>
    )
}
