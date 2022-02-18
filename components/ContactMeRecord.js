import contact from '../src/styles/modules/Contact.module.scss'

export default function ContactMeRecord({ details }) {
  console.log(details)
  return (
    <>
      <div className={contact.title_container}>
        <h1>{details.title}</h1>
        <p>{details.subtitle}</p>
      </div>
    </>
  )
}
