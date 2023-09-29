import React from 'react';
import "./style.scss";

const index = ({main, language, lang}) => {

    const t = language[lang]

    return (
        <>
            <div className="home" style={main}>
                <h1>{t.home}</h1>
            </div>
        </>
    );
};

export default index;