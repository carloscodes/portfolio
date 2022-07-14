// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default function handler(req, res) {
  const {name, email, content } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: "false",
    auth: {
      user: 'chavarriahome17@gmail.com',
      pass: 'hwfxsziryvwlvirk'
    },
    
  });
  
  var mailOptions = {
    from: 'chavarriahome17@gmail.com',
    to: 'chavarriacarlos18@gmail.com',
    subject: 'New Contact from Blog',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${content}`
  };
  
  const response = transporter.sendMail(mailOptions);

  console.log(response);

  res.status(200).json(req.body)
}
