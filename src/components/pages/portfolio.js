import React from "react";

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="container justify-content">
                <ul className="row">
                    <li className="col-4">
                        <img src="../../public/Show-Loader-During-Image-Loading-vue-load-image.png" href="https://github.com/michaelreyna25/ShadowLands" alt="Shadowlands project"/>
                    </li>
                    <li className="col-4">
                    <img src="../../public/Show-Loader-During-Image-Loading-vue-load-image.png" href="https://github.com/michaelreyna25/pre-work-studyguide" alt="first project"/>
                    </li>
                    <li className="col-4">
                    <img src="../../public/Show-Loader-During-Image-Loading-vue-load-image.png" href="https://github.com/megellman/group-project" alt="first group project"/>
                    </li>
                </ul>
                <ul className="row">
                    <li className="col-4">
                    <img src="../../public/Show-Loader-During-Image-Loading-vue-load-image.png" href="https://github.com/michaelreyna25/portfolio" alt="regular portfolio"/>
                    </li>
                    <li className="col-4">
                    <img src="../../public/Show-Loader-During-Image-Loading-vue-load-image.png" href="https://github.com/michaelreyna25/stop-shop" alt="stop shop"/>
                    </li>
                    <li className="col-4">
                    <img src="../../public/Show-Loader-During-Image-Loading-vue-load-image.png" href="https://github.com/michaelreyna25/Generate-My-Team" alt="back end project"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}