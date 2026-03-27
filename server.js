import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
    const { email } = req.body;

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Hello World",
            html: "<p>Your first email works 🔥</p>"
        });

        res.send("Email sent");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error sending email");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});