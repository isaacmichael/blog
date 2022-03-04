import React from "react"
import styles from "./CssModules/modeling.module.css"
import elevationPic from "./Pictures/extras/wiseman height 2d profile.JPG"
import hobby from "./Pictures/hobby.png";

const Modeling = () => {
    return (
        <body>

        <div className="container">

            <header className={styles.header}>
                <h4 className={styles.logo}>GRID</h4>
            </header>

            <section className={styles.intro}>
                <div className={styles.column}>
                    <h3>3D MODELING</h3>

                    <div className={styles.column}>
                        <p>Here you can see what i'm up to. I'll post about photogrammetry, fusion 360, orthomosaics, height maps, and even some CNC videos. Exciting stuff! </p>
                        <p></p>
                    </div>
                </div>
            </section>

            <div className={styles.gallery}>
                <div className={styles.thumbnail}>
                    <iframe className={styles.threeD} width="500" height="300" src="https://www.youtube.com/embed/5hgq2SEYpa0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                    <h4>Best-One Tire Upland, IN</h4>
                    <p className={styles.tag}>Made with OpenDroneMap</p>
                    <p className={styles.text_column}>A model of Best-One Tire upland. Taken With a Phantom 4 Pro Drone
                    Crosshatch survey consisting of ~500 photos for better 3D imaging.

                    </p>
                </div>
                <div className={styles.thumbnail}><a>
                    <div className="sketchfab-embed-wrapper">
                        <iframe className={styles.threeD} title="Andersontile2020" frameBorder="0" allowFullScreen mozallowfullscreen="true"
                                webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"
                                xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered
                                web-share
                                src="https://sketchfab.com/models/9f871c53335b4b10bda56d19f14fb7e8/embed?autospin=1&autostart=1&preload=1"></iframe>
                    </div>
                    <div><img src={elevationPic} alt="elevation Picture"  className={styles.picture} /></div>
                </a>
                    <h4>3D model of crops</h4>
                    <p className={styles.tag}>Made in OpenDroneMap</p>
                    <p className={styles.text_column}>stuff</p>
                </div>

                <div className={styles.thumbnail}>
                    <iframe className={styles.threeD} title="odm_textured_model_geo" frameBorder="0" allowFullScreen mozallowfullscreen="true"
                            webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="https://sketchfab.com/models/4bcc4fc75afa4e35827e3910e035100e/embed"></iframe>
                    <h4>3D Model Of Crops</h4>
                    <p className={styles.tag}>Processed in Agisoft Metashape</p>




                    <p className={styles.text_column}>Compiled # photos for this...</p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img
                    src="file:///C|/Users/isaac/AppData/Roaming/Adobe/Dreamweaver 2021/en_US/Configuration/Temp/Assets/eam292C.tmp/images/bkg_06.jpg"
                    alt="" width="2000" className={styles.cards}/></a>
                    <h4>Shapeoko 3XL</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Show images or video of shapeoko working on something</p>
                </div>
            </div>

            <footer id="contact">
                <p className={styles.hero_header}>GET IN TOUCH WITH ME</p>
                <div className={styles.button}>EMAIL ME</div>
            </footer>

            <div className={styles.copyright}>2022 - <strong>PEARSON</strong></div>
        </div>
        </body>


    );
}

export default Modeling