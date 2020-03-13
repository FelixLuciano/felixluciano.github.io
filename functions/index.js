const functions = require('firebase-functions')
const cors = require('cors')
const nodemailer = require('nodemailer')

const corsHandler = cors({ origin: 'https://felixluciano.github.io/' })

/* Firebase Enviroment variables
 / https://firebase.google.com/docs/functions/config-env
 / nodemailer: {
 /   user: <sendding mail address>,
 /   pass: <sendding email password>,
 /   to: <resiving email addresss>
 /}
*/
const { user, pass, to } = functions.config().nodemailer

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: { user, pass }
})

const request = (req, res) => {
  res.removeHeader("X-Powered-By")
  res.removeHeader("x-powered-by")

  return corsHandler(req, res, () => {
    const { contact, message } = req.body

    const mail = {
      from: `Messeger <${user}>`,
      to: to,
      text: `Reply contact: ${contact}\n\nMessage:\n${message}`
    }

    mailTransport.sendMail(mail, err => {
      if (err) res.status(400).json(false)
      else res.status(200).json(true)
    })
  })
}

exports.sendMessage = functions.https.onRequest(request)
