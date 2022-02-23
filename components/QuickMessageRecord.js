import ContactForm from '../components/ContactForm'

export default function QuickMessageRecord({ details }) {
  return (
    <>
        <div>
            <h1>{details.title}</h1>
            <p>
                {details.subtitle}
            </p>
        </div>
        <ContactForm />
    </>
  )
}