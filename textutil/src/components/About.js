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
            <div>i am about us just about us and i do not want to tell u about use and u cant do anything</div>
        </>
    )
}
