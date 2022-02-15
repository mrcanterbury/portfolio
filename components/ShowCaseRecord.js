import Image from 'next/image'
import showcase from '../src/styles/modules/Showcase.module.scss'

export default function ShowCaseRecord({details}) {
  console.log(details.showCaseGallery)
  return (
    <>
      <div className={showcase.gallery}>
      {details.showCaseGallery.map(card => <div key={card.id}>
        <Image src={card.url} width={card.width} height={card.height} priority />
      </div>)}
      </div>
    </>
  )
}
