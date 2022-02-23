import ContactForm from '../components/ContactForm'
import contact from '../src/styles/modules/Contact.module.scss'

export default function QuickMessageRecord({ details }) {
  return (
    <>
        <div className={contact.main}>
                <h1 className={contact.contact_title}>{details.title}</h1>
                <span className={contact.subtitle}>{details.subtitle}</span>
        </div>
        <ContactForm />
    </>
  )
}