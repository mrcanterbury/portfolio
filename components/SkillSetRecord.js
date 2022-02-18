import Image from 'next/image'
import skillset from '../src/styles/modules/Skillset.module.scss'

export default function SkillSetRecord({ details }) {

  const imgLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <>
      <div className={skillset.grid_container}>
        <div className={skillset.grid_title}>
          <h1>{details.title}</h1>
        </div>
        <div className={skillset.grid}>
          {details.skillGrid.map(item => 
          <div 
          key={item.id} 
          className={skillset.grid_item}
          >
            <Image 
              loader={imgLoader}
              src={item.image.url} 
              width={item.image.width} 
              height={item.image.height} 
              alt={item.image.alt}
            />
            <h5 className={skillset.item_title}>{item.description.toUpperCase()}</h5>
          </div>)}
        </div>
      </div>
    </>
  )
}
