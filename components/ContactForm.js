import form from '../src/styles/modules/Form.module.scss'

export default function ContactForm() {
  return (
    <>
        <form method="" action="">
            <div className={form.main}>
                <div className={form.input_field}>
                    <div className={form.item}>
                        <label htmlFor="first-name">First Name*</label>
                        <input type="text" id="first-name"/>
                    </div>
                    <div className={form.item}>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name"/>
                    </div>
                    <div className={form.item}>
                        <label htmlFor="email">Email Address*</label>
                        <input type="email" id="email"/>
                    </div>
                    <div className={form.item}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone"/>
                    </div>
                    <small>*Fields are required</small>
                </div>
                <div className={form.text_field}>
                    <label htmlFor="message">Message*</label>
                    <textarea name="" id="message"/>
                    <div className={form.btn_container}>
                        <button>Clear Form</button>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
