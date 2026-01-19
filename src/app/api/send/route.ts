import { EmailTemplate } from '~/app/_components/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendContactMail(req: Request){
  try {
    const body = await req.json();
    const { data, error } = await resend.emails.send({
      from: 'mtume2016@mail.onguru.africa',
      to: ['mtume2016@gmail.com'],
      subject: 'Test message from alvas onguru website',
      html: "<h1>New Contact Message</h1><p><strong>Full Name:</strong> " + body.fullName + "</p><p><strong>Email:</strong> " + body.email + "</p><p><strong>Message:</strong> " + body.message + "</p>"
      //react: EmailTemplate({ fullName: body.fullName ,  message: body.message, email: body.email, phone: body.phone }),
    });
    if (error) {
      console.log("Error sending email:", error);
      return Response.json({error:error}, { status: 500 });
    }
  
    return Response.json(data);
  } catch (error) {
    console.log("Error sending email:", error);
    return Response.json({error:error}, { status: 500 });
  }
}


export {sendContactMail as POST};