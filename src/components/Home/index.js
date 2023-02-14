import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['D', 'e', 'v', 'a', 'n', 's', 'h','i','','D','o','s','h','i']
    const jobArray = [
        'C',
        'S',
        'E',
        ' ',
        'U',
        'n',
        'd',
        'e',
        'r',
        'g',
        'r',
        'a',
        'd',
        '',
    ]

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        &nbsp;
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2> AI ML Enthusiast / Web Developer / Python - Java Developer </h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
             <Loader type="pacman" />

            
        </>
    )
}

export default Home