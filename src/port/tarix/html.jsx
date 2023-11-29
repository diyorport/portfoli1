import React from 'react';
import html from "../../img/html.png"
import "../../css/tarx/html.css"


const Html = () => {
    return (
        <React.Fragment>
            <div className="box_1">
                <div className="imagesr">
                    <img src={html} alt="" />
                </div>
                <div className="html__info">
                    <h3 className='info'>
                        Html
                    </h3>
                    <p className='html__tex'>
                        The HTML language was developed around 1991-1992 by Tim Berners-Lee, a British specialist working at the European Center for Nuclear Research. Initially, this language was created as a document preparation tool for professionals. The simplicity of the HTML language (compared to SGML) and the availability of high formatting options made it popular among users. In addition, it was possible to use hypertexts. With the development of the language, additional multimedia (image, sound, animation, etc.) capabilities were added to it.
                    </p>
                </div>
                <a className='aa' href="/aboud">
                back
                </a>
            </div>
            
        </React.Fragment>
    );
}

export default Html;
