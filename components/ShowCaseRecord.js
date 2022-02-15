import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import showcase from '../src/styles/modules/Showcase.module.scss'

export default function ShowCaseRecord({details}) {
  console.log(details.showCaseGallery)
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
  const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])

  return (
    <>

      <div className={showcase.gallery_container}>
        <div className={showcase.gallery}>
          <div className={showcase.embla} ref={emblaRef}>
            <div className={showcase.embla__container}>
              {details.showCaseGallery.map(card => <div className={showcase.embla__slide} key={card.id}>
                <Image src={card.url} width={card.width} height={card.height} priority />
              </div>)}
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
              Prev
            </button>
            <button className="embla__next" onClick={scrollNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
