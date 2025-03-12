const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const pool = new Pool({
  user: "postgres",
  host: "tramway.proxy.rlwy.net",
  database: "railway",
  password: "kvDUeCiOmhyzAFkOPIaTTaiMOHlnLFfj",
  port: 12253,
  ssl: { rejectUnauthorized: false },
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files from the current directory

// Test database connection
pool
  .connect()
  .then((client) => {
    console.log("✅ Connected to PostgreSQL");
    return client
      .query("SELECT current_database();")
      .then((res) => {
        console.log("Connected to database:", res.rows[0].current_database);
        client.release();
      });
  })
  .catch((err) => {
    console.error("❌ PostgreSQL Connection Error:", err);
    process.exit(1);
  });

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "louisphiri955@gmail.com", // Your Gmail
    pass: "memd nauy jnmt nglw", // Generated App Password
  },
});

// API root endpoint
app.get("/", (req, res) => {
  res.json({ message: "API is running!" });
});

// Booking endpoint
app.post("/book", async (req, res) => {
  const { name, email, cell, hairstyle, size, length, color, date, time, approved } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO "Touched_by_angela"."bookings" 
        (name, email, cell, hairstyle, size, length, color, date, time, created_at, approved) 
       VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), $10) 
       RETURNING *`,
      [name, email, cell, hairstyle, size, length, color, date, time, approved]
    );

    // Email content
    const mailOptions = {
      from: "louisphiri955@gmail.com",
      to: "carterprince95@gmail.com", // Sending to the customer
      subject: "Booking Confirmation - Touched by Angela",
      text: `Hello ${name},

Thank you for booking with Touched by Angela! Here are your booking details:

📌 Hairstyle: ${hairstyle}
📏 Size: ${size}
📏 Length: ${length}
🎨 Color: ${color}
📅 Date: ${date}
⏰ Time: ${time}

📞 Contact: ${cell}
Your booking is ${approved ? "✅ Approved" : "⏳ Pending approval"}.

Best regards,
Touched by Angela Team`,
    };

    // Send email notification
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Error sending email:", error);
      } else {
        console.log("📧 Email sent successfully:", info.response);
      }
    });

    res.status(201).json({ message: "Booking saved and email sent successfully!", booking: result.rows[0] });
  } catch (error) {
    console.error("❌ Error saving booking:", error);
    res.status(500).json({ error: "Error saving booking" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
