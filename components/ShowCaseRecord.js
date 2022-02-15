import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import showcase from '../src/styles/modules/Showcase.module.scss'

export default function ShowCaseRecord({details}) {
  console.log(details.showCaseGallery)
  const [emblaRef] = useEmblaCarousel()
  return (
    <>
      <div className={showcase.gallery}>
        <div className={showcase.embla} ref={emblaRef}>
          <div className={showcase.embla__container}>
            {details.showCaseGallery.map(card => <div className={showcase.embla__slide} key={card.id}>
              <Image src={card.url} width={card.width} height={card.height} priority />
            </div>)}
          </div>
        </div>
      </div>
    </>
  )
}
