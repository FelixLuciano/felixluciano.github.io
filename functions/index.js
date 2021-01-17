const functions = require("firebase-functions")
const cors = require("cors")
const nodemailer = require("nodemailer")

const corsHandler = cors({ origin: "https://lucianofelix.com.br" })

/* Firebase Enviroment variables
 / https://firebase.google.com/docs/functions/config-env
 / nodemailer: {
 /   user: <sendding mail address>,
 /   pass: <sendding email password>,
 /   to: <resiving email addresss>
 /}
*/
console.log(functions.config())
const { user, pass, to } = functions.config().nodemailer

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass }
})

const request = (req, res) => {
  res.removeHeader("X-Powered-By")
  res.removeHeader("x-powered-by")

  return corsHandler(req, res, () => {
    const { contact, message:plainMessage } = req.body

    const message = plainMessage.replace(/\n/gm, "<br>")

    const mail = {
      from: `LucianoFelix.com.br <${user}>`,
      to: to,
      subject: "Nova Mensagen",
      html: `<b>Contact:</b><div style="padding-left:1ex">${contact}</div><br><b>Message:</b><blockquote class="gmail_quote" style="margin:.5ex 0 0 1ex;border-left:1px solid #000;padding-left: 1ex;">${message}</blockquote>`
    }
    
    mailTransport.sendMail(mail, err => {
      if (err) {
        res.status(400).json(false)
        console.log(err)
      }
      else res.status(200).json(true)
    })
  })
}

exports.sendMessage = functions.https.onRequest(request)
