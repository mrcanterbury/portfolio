import { useState } from 'react'
import form from '../src/styles/modules/Form.module.scss'

export default function ContactForm() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const data = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };
    fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
    })
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className={form.main}>
                <div className={form.input_field}>
                    <div className={form.item}>
                        <label htmlFor="first-name">First Name*</label>
                        <input 
                            type="text" 
                            id="first-name" 
                            onChange={e => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={form.item}>
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            type="text" 
                            id="last-name"
                            onChange={e => setLastName(e.target.value)}
                         />
                    </div>
                    <div className={form.item}>
                        <label htmlFor="email">Email Address*</label>
                        <input
                            type="email" 
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            required 
                         />
                    </div>
                    <div className={form.item}>
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone"
                            maxLength="11"
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <small>* Fields are required</small>
                </div>
                <div className={form.text_field}>
                    <label htmlFor="message">Message*</label>
                    <textarea
                        type="text"
                        id="message"
                        onChange={e => setMessage(e.target.value)}
                        required 
                    />
                    <div className={form.btn_container}>
                        <button
                            type="reset"
                            className={form.form_clear}>
                            Reset
                        </button>
                        <button
                            type="submit"
                            className={form.form_submit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
