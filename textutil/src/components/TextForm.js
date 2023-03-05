import React, { useState } from 'react';


const name = "soni";
export default function TextForm(props) {

    const name2 = "soni";
    const [text, setText] = useState("");
    let old;
    const upperCase = (e) => {
        old = text.toUpperCase();
        setText(old);
    }
    const lowerCase = () => {
        old = text.toLowerCase();
        setText(old);
    }
    const atChange = (e) => {
        setText(e.target.value);
    }
    const clearText = (e) => {
        setText("");
    }
    const copyText = (e) => {
        navigator.clipboard.writeText(text);
    }
    return (
        <>
            <textarea name="" id="" cols="30" rows="10" value={text} onChange={atChange}></textarea>
            <button onClick={upperCase}>click for uppercase</button>
            <button onClick={lowerCase}>click for lowercase</button>
            <button onClick={clearText}>clear text</button>
            <button onClick={copyText}>copy your text</button>
            <h2>summary of your text</h2>
            <p>written words: {text.split(" ").length}</p>
            <p>written character : {text.length}</p>
            <h1>your written text preview</h1>
            <p>{text}</p>
        </>
    )
}
