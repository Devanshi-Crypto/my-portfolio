import { useEffect, useRef } from 'react'
import anime from 'animejs'
import LogoS from '../../../assets/images/D.svg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    anime({
      targets: bgRef.current,
      opacity: 1,
      duration: 1000,
      easing: 'easeInOutQuad',
    })

    anime({
      targets: outlineLogoRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 20000,
      easing: 'linear',
    })

    anime({
      targets: solidLogoRef.current,
      opacity: 1,
      duration: 4000,
      delay: 4000,
      easing: 'easeInOutQuad',
    })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"

      >
        <g transform="translate(-9,-9)"><g filter="url(#editing-vintage)">
          <g transform="translate(228.43498826026917, 96.85499572753906)">

            <path
              ref={outlineLogoRef}
              d="M42.62-26.56L42.62-26.56L42.62-26.56Q42.62 0.70 13.06 0.70L13.06 0.70L13.06 0.70Q8.32 0.70 0.51-0.45L0.51-0.45L7.68-38.27L7.68-38.27Q8.19-40.83 8.51-42.30L8.51-42.30L8.51-42.30Q18.24-43.01 22.56-43.01L22.56-43.01L22.56-43.01Q26.88-43.01 30.85-42.11L30.85-42.11L30.85-42.11Q34.82-41.22 37.44-39.23L37.44-39.23L37.44-39.23Q42.62-35.33 42.62-26.56ZM29.44-28.93L29.44-28.93L29.44-28.93Q29.44-38.46 22.59-38.46L22.59-38.46L21.95-38.46L21.95-38.46Q21.63-38.46 21.31-38.40L21.31-38.40L14.72-4.03L14.72-4.03Q14.98-3.90 15.23-3.90L15.23-3.90L15.74-3.90L15.74-3.90Q18.11-3.90 20.58-5.38L20.58-5.38L20.58-5.38Q23.04-6.85 24.96-9.86L24.96-9.86L24.96-9.86Q29.44-16.83 29.44-28.93Z" fill="#f00" stroke="#0f0" stroke-width="1.8" />
          </g></g></g>
      </svg>
    </div>
  )
}

export default Logo