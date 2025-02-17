import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import cobraImage1 from '../assets/cobra1.jpeg'
import cobraImage2 from '../assets/cobra2.jpeg'
import cobraImage3 from '../assets/cobra3.jpeg'
import cobraImage4 from '../assets/cobra4.jpeg'
import cobraImage5 from '../assets/cobra5.jpeg'

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth)

  useEffect(() => {
    const images = [
      cobraImage1,
      cobraImage2,
      cobraImage3,
      cobraImage4,
      cobraImage5,
    ]
    let loadedCount = 0

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        if (loadedCount === images.length) {
          setImagesLoaded(true)
        }
      }
    })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setMediaWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (imagesLoaded) {
      const bgElement = document.querySelector('.shared-background')
      let index = 0
      const images = [
        cobraImage1,
        cobraImage2,
        cobraImage3,
        cobraImage4,
        cobraImage5,
      ]

      const changeBackground = () => {
        bgElement.style.backgroundImage = `url(${images[index]})`
        bgElement.style.opacity = 1
        bgElement.style.backgroundPosition = mediaWidth > 768 ? 'center' : 'top right'
        index = (index + 1) % images.length
        bgElement.style.transition = 'background-image 1s ease-in-out'
      }

      const interval = setInterval(changeBackground, 4000)

      return () => clearInterval(interval)
    }
  }, [imagesLoaded, mediaWidth])

  return (
    <HeroWrapper>
      <section className="sec1">
        <div className="overlay"></div>
        <div className="shared-background">
          <ul>
            <li>C</li>
            <li>O</li>
            <li>B</li>
            <li>R</li>
            <li>A</li>
            <li>S</li>
          </ul>
          <h2 id="text">COBRAS BEACH VOLLEYBALL CLUB</h2>
        </div>
      </section>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  /* Your existing styles remain the same */
`

export default Hero
