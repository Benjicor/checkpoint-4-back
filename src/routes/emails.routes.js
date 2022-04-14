require("dotenv").config();

const emailRouter = require("express").Router();
const nodemailer = require("nodemailer");
const path = require("path");
const nodemailerHbs = require("nodemailer-express-handlebars");

const { EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, EMAIL_USED, EMAIL_PASS } = process.env;

// Configuration de nodemailer pour lui dire quelle boîte il utilise
const transport = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_SECURE,
  auth: {
    user: EMAIL_USED,
    pass: EMAIL_PASS,
  },
});

// Envoie de mail avec hbs template et un fichier
emailRouter.post("/hbs-and-file", async (req, res) => {
  const { email, firstname, lastname, subject, message } = req.body;

  // Configuration du mail avec du hbs et une image
  const mailOptions = {
    from: email,
    to: EMAIL_USED,
    cc: email,
    subject: `Bonjour je suis ${firstname} ${lastname} et vous contact depuis votre Blog Voiles et Voiliers`, // Envoie d'email avec une template hbs
    attachments: [
      {
        filename: "PenDuickIII.jpeg",
        path: path.join(__dirname, "../../public/images/PenDuickIII.jpeg"),
        cid: "PenDuickIII.jpeg",
      },
    ],
    template: "index",
    context: {
      src: "PenDuickIII.jpeg",
      alt: "Photo Pen Duick III",
      firstname,
      lastname,
      email,
      subject,
      message,
    },
  };

  // Configuration de nodemailer pour utiliser un template hbs
  transport.use(
    "compile",
    nodemailerHbs({
      viewEngine: {
        extName: ".hbs",
        partialsDir: path.join(__dirname, "../views"),
        layoutsDir: path.join(__dirname, "../views/layouts"),
        defaultLayout: "",
      },
      viewPath: path.join(__dirname, "../views"),
      extName: ".hbs",
    }),
  );

  try {
    await transport.sendMail(mailOptions);
    res.send("Email envoyé avec succés !!!");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = emailRouter;
