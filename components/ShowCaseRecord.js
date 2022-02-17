import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import showcase from '../src/styles/modules/Showcase.module.scss'
import arrowPrev from '../src/img/arrow_prev.svg'
import arrowNext from '../src/img/arrow_next.svg'
import test from '../public/images/card1_large.png'

export default function ShowCaseRecord({details}) {

  const [emblaRef, emblaApi] = useEmblaCarousel({draggable: true, loop: true})
  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

  return (
    <>
    <Image src={test} width={400} height={500} alt="Test Card"/>
      <div className={showcase.gallery_container}>
        <button className={showcase.showcase_button} onClick={scrollPrev}>
          <Image src={arrowPrev} alt="Prev" title="Previous"/>
        </button>
        <div className={showcase.gallery}>
          <div className={showcase.embla} ref={emblaRef}>
            <div className={showcase.embla__container}>
              {details.showCaseGallery.map(card => <div className={showcase.embla__slide} key={card.id}>
                <Image src={card.url} width={card.width} height={card.height} alt="Showcase Card"/>
              </div>)}
            </div>
          </div>
        </div>
        <button className={showcase.showcase_button} onClick={scrollNext}>
          <Image src={arrowNext} alt="Next" title="Next"/>
        </button>
      </div>
    </>
  )
}
