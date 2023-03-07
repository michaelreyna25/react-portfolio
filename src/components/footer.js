import React from "react";

function Footer() {
    return (
        <footer>
            <div className="git-hub">
                <img href="https://github.com/michalreyna25"
                    src="../../public/github-mark/github-mark.png"
                    alt="github profile picture"
                />
            </div>
            <div className="linked">
                <img 
                href="https://www.linkedin.com/in/michael-reyna-35b597245/"
                src="../../public/icons8-linkedin-circled-48.png"
                alt="linkedin profile"
                />
            </div>
            <div className="stack-overflow">
                <img 
                    href=""
                    src="../../public/stcak-overflow.png"
                    alt="stack-overflow link"
                />
            </div>
        </footer>
    );
} 

export default Footer;