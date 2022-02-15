import Image from 'next/image'
import about from '../src/styles/modules/About.module.scss';

export default function AboutMeRecord({details}) {
  return (
    
    <div className={about.main}>

      <div className={about.grid}>

        <div className={about.text}>
          <article>
            <h1>{details.title}</h1>
            <div>
              <p>
                {details.textOne}
              </p>
              <p>
                {details.textTwo}
              </p>
              <p>
                {details.textThree}
              </p>
            </div>
          </article>
        </div>
        <div className={about.imageContainer}>
          <div className={about.image}>
            <Image src={details.image.url} width={details.image.width} height={details.image.height} alt={details.image.alt} title={details.image.title} priority />
          </div>
        </div>

      </div>

    </div>
  )
}
