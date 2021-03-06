import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";


const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Italian",
        value: "it"
    },
    {
        label: "English",
        value: "en"
    }
]
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                    <Dropdown
                        label="Select a Language"
                        selected={language}
                        onSelectedChange={setLanguage}
                        options={options}
                    />
                    <hr/>
                    <h3 className="ui header">Ouput</h3>
                    <Convert text={text} language={language} />
                </div>
            </div>
        </div>
    );
};

export default Translate;
