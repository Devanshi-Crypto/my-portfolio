import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import projectData from '../../data/project.json'


const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(projectData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderProject = (project) => {
        return (

            <div className="images-container">
                {
                    project.map((port, idx) => {
                        return (
                            <div key={idx} className="photo-grid">
                                <img src={port.cover}
                                    alt="img" className="card" />
                                
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>

                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container project-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Project".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderProject(projectData.project)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Project;