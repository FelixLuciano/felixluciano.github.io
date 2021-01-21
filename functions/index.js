const { https } = require("firebase-functions")
const sendMessage = require("./send-message.js")

exports.sendMessage = https.onRequest(sendMessage)
