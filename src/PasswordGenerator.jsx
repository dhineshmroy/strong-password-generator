import React, { useState } from "react";

export const PasswordGenerator = () => {
    const [lenght, setLength] = useState("");
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumber, setIncludeNumber] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");

    const generatePassword = () => {
        let charSet = "";
        let generatePassword = "";

        if(includeUppercase) charSet += "ABCDEFGHIJKLMNOPQERSTUVWXYZ";
        if(includeLowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
        if(includeNumber) charSet += "0123456789";
        if(includeSymbols) charSet += "!@#$%^&*()_+=";

        // console.log(charSet);

        for(let i = 0; i < lenght; i++){
            const randomIndex = Math.floor(Math.random() * charSet.length);
            generatePassword += charSet[randomIndex];
        }
        setPassword(generatePassword);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setAlert("Password Copied");
    }

    return (
       <div className="password-generator">
            <h2>Strong Password Generator</h2>
            <div className="input-group">
                <label htmlFor="num">Password Lenght :</label>
                <input type="number" id="num" onChange={(e)=> {setLength(parseInt(e.target.value))}}/>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="upper" onChange={(e) => setIncludeUppercase(e.target.checked)} />
                <label htmlFor="upper">Include Uppercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="lower" onChange={(e) => setIncludeLowercase(e.target.checked)} />
                <label htmlFor="lower">Include Lower Uppercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="number" onChange={(e) => setIncludeNumber(e.target.checked)} />
                <label htmlFor="number">Include Numbers</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="symbol" onChange={(e) => setIncludeSymbols(e.target.checked)} />
                <label htmlFor="symbol">Include Symbol</label>
            </div>
            <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
            <div className="generate-password">
                <input type="text" readOnly value={password} />
                <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
                
            </div>
            <div className="alert">
                <p>{alert}</p>
            </div>
       </div>
    );
}