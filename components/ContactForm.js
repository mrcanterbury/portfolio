import form from '../src/styles/modules/Form.module.scss'

export default function ContactForm() {
  return (
    <>
        <form method="" action="">
            <div className={form.main}>
                <div className={form.input_field}>
                    <div className={form.item}>
                        <label htmlFor="first-name">First Name*</label>
                        <input type="text" id="first-name" name="first-name" required />
                    </div>
                    <div className={form.item}>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name"/>
                    </div>
                    <div className={form.item}>
                        <label htmlFor="email">Email Address*</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={form.item}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone"
                        />
                    </div>
                    <span>*Fields are required</span>
                </div>
                <div className={form.text_field}>
                    <label htmlFor="message">Message*</label>
                    <textarea name="message" id="message" required />
                    <div className={form.btn_container}>
                        <button className={form.form_clear}>Reset</button>
                        <button className={form.form_submit}>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}
