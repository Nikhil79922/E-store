const Users = require("../models/Auth")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")

async function handleSignUp(req, res) {
    try {
        const { name, email, phone, role, password } = req.body;
        const existingUser = await Users.findOne({ email })
        const samePhone = await Users.findOne({ phone })
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" })
        }
        if (samePhone) {
            return res.status(400).json({ message: "Phone already exists" })
        }
        const user = new Users({ name, email, phone, role, password })
        user.password = await bcrypt.hash(user.password, 10)
        await user.save()
        res.status(201).json({ message: "User created successfully" })
    }
    catch (err) {
        res.status(400).json({ message: "SignUp Failed" })
    }
}

async function handleLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User Not Found" })
        }
        const verifypass = await bcrypt.compare(password, user.password)

        if (!verifypass) {
            return res.status(400).json({ message: "Incorrect Password" })
        }
        const token = jwt.sign({
            email: user.email,
            _id: user._id,
        }, process.env.SECRET, { expiresIn: '24h' })
        res.status(200).json({ message: "Loged In successfully ", JWT_token: token, role: user.role, name: user.name })
    }
    catch (err) {
        res.status(400).json({ message: "Login Failed" })
    }
}

async function handleForgetPassword(req, res) {
    const { email } = req.body
    const user = await Users.findOne({ email })
    if (!user) {
        return res.status(400).json({ message: "User Not Found" })
    }
    const token = jwt.sign({ email: user.email }, process.env.SECRET, { expiresIn: '5m' })

    // const link = `http://localhost:8000/user/reset/${isUser._id}/${token}`;
    const link = `http://localhost:5173/reset-password?token=${token}`

    // email sending
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: `Password Reset Request`,
        text: `
<!doctype html>
<html lang="en-US">

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>Reset Password Email Template</title>
<meta name="description" content="Reset Password Email Template.">
<style type="text/css">
  a:hover {text-decoration: underline !important;}
</style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
<!--100% body table-->
<table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
  style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
  <tr>
      <td>
          <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
              align="center" cellpadding="0" cellspacing="0">
              
              <tr>
                  <td>
                      <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                          style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                          <tr>
                              <td style="height:40px;">&nbsp;</td>
                          </tr>
                          <tr>
                              <td style="padding:0 35px;">
                                  <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                      requested to reset your password</h1>
                                  <span
                                      style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                      We cannot simply send you your old password. A unique link to reset your
                                      password has been generated for you. To reset your password, click the
                                      following link and follow the instructions.
                                  </p>
                                  <a href=${link}
                                      style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                                      Password</a>
                              </td>
                          </tr>
                          <tr>
                              <td style="height:40px;">&nbsp;</td>
                          </tr>
                      </table>
                  </td>
             
          </table>
      </td>
  </tr>
</table>
<!--/100% body table-->
</body>

</html>`,
        html: `
<!doctype html>
<html lang="en-US">

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>Reset Password Email Template</title>
<meta name="description" content="Reset Password Email Template.">
<style type="text/css">
  a:hover {text-decoration: underline !important;}
</style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
<!--100% body table-->
<table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
  style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
  <tr>
      <td>
          <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
              align="center" cellpadding="0" cellspacing="0">
             
              <tr>
                  <td>
                      <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                          style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                          <tr>
                              <td style="height:40px;">&nbsp;</td>
                          </tr>
                          <tr>
                              <td style="padding:0 35px;">
                                  <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                      requested to reset your password</h1>
                                  <span
                                      style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                      We cannot simply send you your old password. A unique link to reset your
                                      password has been generated for you. To reset your password, click the
                                      following link and follow the instructions.
                                  </p>
                                  <a href="${link}"
                                      style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                                      Password</a>
                              </td>
                          </tr>
                          <tr>
                              <td style="height:40px;">&nbsp;</td>
                          </tr>
                      </table>
                  </td>
             
          </table>
      </td>
  </tr>
</table>
<!--/100% body table-->
</body>

</html>`
    };
    try {
        transport.sendMail(mailOptions)
        return res.status(200).json({ message: "Email sent Successfully", success: true })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

async function handleResetPassword(req, res) {
    const { token } = req.query;
    const { password } = req.body;

    if (token) {
        try {
            const decode = jwt.verify(token, process.env.SECRET);
            const updatedUser = await Users.findOneAndUpdate(
                { email: decode.email },
                { $set: { password: password } },
                { new: true } 
            );
            updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
            await updatedUser.save();
            return res.status(200).json({ message: "Password updated successfully", success: true });
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(400).json({ message: "Token has expired", error: 'TokenExpiredError' });
            }
            return res.status(400).json({ message: "JWT Token verification failed", error });
        }
    } else {
        return res.status(400).json({ message: "Invalid token" });
    }
}

module.exports = {
    handleSignUp,
    handleLogin,
    handleForgetPassword,
    handleResetPassword,

}