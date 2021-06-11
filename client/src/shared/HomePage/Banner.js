import React from 'react';
import Typewriter from 'typewriter-effect';

import banner from '../../assets/images/home-1.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <React.Fragment>
            <header
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundImage: `URL("${banner}")`
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        <Typewriter
                            options={{
                                loop: true,
                              }}
                            onInit={(typewriter) => {
                                typewriter.typeString("WE ARE CHEMICAL ENGINEERING SOCIETY.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('LEADING <strong>AICHE</strong> CHAPTER.')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .pauseFor(1000)
                                    .start();
                            }}
                        />
                        </h1>
                </div>
                <div className="banner--fadeBottom" />
            </header>
        </React.Fragment>
    )
}

export default Banner