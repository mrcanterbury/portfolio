import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import showcase from '../src/styles/modules/Showcase.module.scss'

export default function ShowCaseRecord({ details }) {

  const imgLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({draggable: true, loop: true})
  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

  return (
    <>
      <div className={showcase.gallery_container}>
        <button className={showcase.showcase_button} onClick={scrollPrev}>
          <Image
            loader={imgLoader}
            src='/arrow_prev.svg'
            alt="Prev"
            title="Prev"
            width={40}
            height={40}
          />
        </button>
        <div className={showcase.gallery}>
          <div className={showcase.embla} ref={emblaRef}>
            <div className={showcase.embla__container}>
              {details.showCaseGallery.map(card => (
                <div className={showcase.embla__slide} key={card.id}>
                  <Image
                    loader={imgLoader}
                    src={card.url}
                    alt={card.alt}
                    width={card.width} 
                    height={card.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className={showcase.showcase_button} onClick={scrollNext}>
          <Image
            loader={imgLoader}
            src='/arrow_next.svg'
            alt="Next"
            title="Next"
            width={40}
            height={40}
          />
          </button>
      </div>
    </>
  )
}