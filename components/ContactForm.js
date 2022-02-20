import form from '../src/styles/modules/Form.module.scss'

export default function ContactForm() {
  return (
    <>
    <div className={form.main}>
        <form method="" action="">
            <div>
                <label htmlFor="first-name">First Name*</label>
                <input type="text" id="first-name"/>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name"/>
                <label htmlFor="email">Email Address*</label>
                <input type="email" id="email"/>
                <label htmlFor="phone">Phone Number</label>
                <input type="phone" id="phone"/>
                <span>
                    *Fields are required
                </span>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <button>Clear Form</button>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}
