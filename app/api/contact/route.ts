import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    const { name, email, message } = await request.json()

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'arynkeenan@icloud.com',
        subject: `Portfolio enquiry from ${name}`,
        html: `<p><b>Name:</b> ${name}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Message:</b> ${message}</p>`
    })

    return Response.json({ success: true })
}