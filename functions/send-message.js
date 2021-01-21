const { config } = require("firebase-functions")
const nodemailer = require("nodemailer")
const cors = require("cors")

const corsHandler = cors({
  origin: "https://lucianofelix.com.br"
})
const { user, pass, to } = config().nodemailer
const mailer = nodemailer.createTransport(
  {
    service: "gmail",
    auth: {
      user,
      pass
    }
  },{
    from: `LucianoFelix.com.br <${user}>`,
    to,
    subject: "Nova Mensagen",
  }
)

function sendMessage(request, response) {
  return corsHandler(request, response, async () => {
    response.removeHeader("X-Powered-By")
    response.removeHeader("x-powered-by")

    const { contact, message:text } = request.body
    const message = text.replace(/\n/gm, "<br>")
    const mail = {
      text: `Conact: ${contact}\nMessage:\n${text}`,
      html: `<b>Contact:</b> ${contact}<br/><b>Message:</b><blockquote class="gmail_quote" style="margin:.5ex 0 0 1ex;border-left:1px solid #000;padding-left: 1ex;">${message}</blockquote>`
    }

    const info = await mailer.sendMail(mail)
    response.status(200).json("Message sent successfully! I will reply as soon as possible.")
  })
}

exports.default = sendMessage
