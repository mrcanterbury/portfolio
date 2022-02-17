import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import showcase from '../src/styles/modules/Showcase.module.scss'
import arrowPrev from '../public/arrow_prev.svg'
import arrowNext from '../public/arrow_next.svg'

export default function ShowCaseRecord({details}) {

  const [emblaRef, emblaApi] = useEmblaCarousel({draggable: true, loop: true})
  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

  return (
    <>
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
