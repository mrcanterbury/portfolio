import ContactRecord from './ContactRecord'
import QuickMessageRecord from './QuickMessageRecord'

export default function ContactModule({ details }) {
    if(details.__typename === "ContactRecord") {
        return <ContactRecord details={details} />;
    } else if(details.__typename === "QuickMessageRecord") {
        return <QuickMessageRecord details={details} />;
    }
  return (
    <div>
        <h1>Contact Module</h1>
    </div>
  )
}