import Image from 'next/image'
import contact from '../src/styles/modules/Contact.module.scss'

export default function ContactRecord({ details }) {

  const imgLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <>
        <div className={contact.main}>
            <div>
                <h1 className={contact.contact_title}>{details.title}</h1>
            </div>
            <div className={contact.list_container}>
                {details.contactList.map(item => 
                <div 
                key={item.id} 
                className={contact.list_item}
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