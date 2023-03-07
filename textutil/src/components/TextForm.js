import React, { useState } from 'react';


export default function TextForm(props) {

    let soni = "abcde";
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
    const atChange = (event) => {
        setText(event.target.value);
    }
    const clearText = (e) => {
        setText("");
    }
    const copyText = (e) => {
        document.getElementById('id').select();
        navigator.clipboard.writeText(text);
    }

    const changeSoni = () => {
        soni = "xyz";
    }

    const base = {
        margin: '4px',
        padding: '4px'

    }

    const handleSpaces = () => {
        // text.replaceAll("\\s+", " "); in java we can do this
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [myStyle, setMyStyle] = useState({ color: 'black', backgroundColor: 'white', border: '2px solid blue' });
    const [btnText, setBtnText] = useState("Enabl dark mode");
    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({ color: 'white', backgroundColor: 'black', border: '2px solid khakhi' });
            setBtnText("Enable light mode");
        }
        else {
            setMyStyle({ color: 'black', backgroundColor: 'white', border: '2px solid blue' })
            setBtnText("Enable Dark mode");

        }
    }
    return (
        <>
            <textarea style={{ ...myStyle, ...base }} name="" id="id" cols="30" rows="10" value={text} onChange={atChange}></textarea>
            <button style={base} onClick={upperCase}>click for uppercase</button>
            <button style={base} onClick={lowerCase}>click for lowercase</button>
            <button style={base} onClick={clearText}>clear text</button>
            <button style={base} onClick={copyText}>copy your text</button>
            <button style={base} onClick={toggleStyle}>{btnText}</button>
            <button style={base} onClick={handleSpaces}>remove extra spaces</button>

            <h2>summary of your text</h2>
            {/* <p>written words: {text.split(" ").length}</p> */}
            {/* the above code will count spaces also a word */}
            <p>written words: {text.length === 0 ? 0 : text.charAt(text.length - 1) === " " ? text.split(/[ ]+/).length - 1 : text.split(/[ ]+/).length}</p>
            {/* if last char ==" " then length-1 */}

            <p>written character : {text.length}</p>
            <h1>your written text preview</h1>
            <p>{text}</p>

            <p>{soni}</p>
            <button onClick={changeSoni}>i am button</button>
        </>
    )
}
