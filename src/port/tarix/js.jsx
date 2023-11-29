import React from 'react';
import js from '../../img/js.png'
import '../../css/tarx/js.css'
const Js = () => {
    return (
        <React.Fragment>
            <div className="box_3">
                <div className="images">
                    <img src={js} alt="" />
                </div>
                <div className="html__info">
                    <h3 className='info'>
                        Js
                    </h3>
                    <p className='html__tex'>
                        JavaScript (pronounced: /ˈdʒɑːvəskrɪpt/; abbreviated: JS /ˈdʒeɪ.ɛs./) is a high-level programming language. It was created in 1995 by American programmer Brendan Eich. JavaScript is used by all major browsers.

                        Although the Java and JavaScript programming languages ​​have similar names, syntax, and standard libraries, they differ significantly.
                        (December 4, 1995). "Netscape and Sun announce JavaScript, the Open, Cross-platform Object Scripting Language for Enterprise Networks and the Internet". Press release.
                        "nodejs/node-eps". GitHub. Archived from the original on August 29, 2020. Accessed: July 5, 2018.
                        Seibel, Peter. Coders at Work: Reflections on the Craft of Programming, September 16, 2009. ISBN 9781430219484. 
                    </p>
                </div>
                <a className='aa' href="/aboud">
                back
                </a>
            </div>
        </React.Fragment>
    );
}

export default Js;
