import Image from 'next/image'

export default function ContactRecord({ details }) {

  const imgLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <>
        <div>
            <div>
                <h1>{details.title}</h1>
                <span>
                    {details.subtitle}
                </span>
            </div>
            <div>
                {details.contactList.map(item => 
                <div 
                key={item.id} 
                // className={}
                >
                <Image 
                    loader={imgLoader}
                    src={item.icon.url} 
                    width={item.icon.width} 
                    height={item.icon.height} 
                    alt={item.icon.alt}
                />
                <div>
                    <span>{item.userHandle}</span>
                </div>
                </div>)}
            </div>
        </div>
    </>
  )
}