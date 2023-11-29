import React from 'react';
import css from "../../img/css.png"
import "../../css/tarx/style.css"

const Css = () => {
    return (
        <React.Fragment>
            <div className="box_2">
                <div className="images">
                    <img src={css} alt="" />
                </div>
                <div className="html__info">
                    <h3 className='info'>
                        Css
                    </h3>
                    <p className='html__tex'>
                        The full form of CSS was created in 1997 and is supported and made available by the WWW Consortium. Initially, CSS codes were understood by Netscape Navigator 4.0 and Internet Explorer 4.0 browsers, but now CSS codes can be supported by any browser.

                        CSS describes how elements will appear on screen, on paper, and/or in other media. CSS is used to give various styles to web pages. It is also possible to change the design of several web pages at the same time. It also makes a web page look different on different devices. CSS file .css format allows you to store external memory and when the time comes, we can give a new look to the web page by changing only the CSS file, without changing the HTML code of the web page. In short, HTML is used only to write the code of a web page, you can design a web page in HTML, but since this is a very long process, CSS has taken over this task.

                        One advantage of CSS over other languages ​​is that no compilers, editors, or other programs are required to compile CSS code. All we need is Internet Explorer and similar browsers. Through browsers, we can easily analyze CSS codes and see our results directly.
                    </p>
                </div>
                <a className='aa' href="/aboud">
                back
                </a>
            </div>
        </React.Fragment>
    );
}

export default Css;
