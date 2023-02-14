import { useEffect, useState } from 'react'
import {
    faJava,
    faPython,
    faCss3,
    faHtml5,
    faJs,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        <div className="para">
                        I'm a very ambitious front-end , java/python developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                        </div>
                    </p>

                    <p align="LEFT">
                        <div className="para">
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                        </div>
                    </p>
                    <br />
                    <p >
                        <div className="achievement">
                        Education<br/>
                        B.E in CSE with spec in AI ML         2020 - 2024          
                        New L J Institute of Engineering and Technology                                                         		 
                        Gujarat Technological University  
                        <br />
                        <br/>
                        Academic Achievements: <br/>
                            CPI - 9.75 <br /> Sem 1 SPI - 9.79 <br />   Sem 2 SPI - 10.0  <br />  Sem 3 SPI - 9.26  <br />  Sem 4 SPI - 10.0
                        </div>
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava} color="#dd0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faPython} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About