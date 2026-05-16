import nodemailer from "nodemailer";

export async function sendResetEmail(to, resetUrl) {
  if (!process.env.EMAIL_HOST) {
    console.log("====================================");
    console.log("Link de recuperação de senha:");
    console.log(resetUrl);
    console.log("====================================");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: "Recuperação de senha",
    html: `
      <h2>Recuperação de senha</h2>

      <p>Recebemos uma solicitação para redefinir sua senha.</p>

      <p>Clique no link abaixo para criar uma nova senha:</p>

      <a href="${resetUrl}">${resetUrl}</a>

      <p>Esse link expira em 10 minutos.</p>

      <p>Se você não solicitou essa alteração, ignore este e-mail.</p>
    `
  });
}