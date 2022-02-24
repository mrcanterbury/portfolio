import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {

    const body = JSON.parse(req.body)

    const message = `
        First Name: ${body.firstName}\r\n
        Last Name: ${body.lastName}\r\n
        Email: ${body.email}\r\n
        Phone: ${body.phone}\r\n
        Message: ${body.message}
    `

    const data = {
        to: 'info@mattcanterbury.com',
        from: 'contact@mattcanterbury.com',
        subject: `New Form Submission from ${body.firstName}`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    }

    await mail.send(data)

    res.status(200).json({ status: 'OK' })
}