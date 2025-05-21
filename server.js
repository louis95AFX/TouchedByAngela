const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// CORS middleware — allow specified origins
const allowedOrigins = [
  'https://www.touchedbyangela.co.za',
  'https://touchedbyangela.co.za',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'null'
];
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin like mobile apps or curl
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Or you can keep your current connection details here:
// const pool = new Pool({
//   connectionString: 'postgresql://postgres:Amalouis1!@db.dyetymjohesrlmjsxvwg.supabase.co:5432/postgres',
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const pool = new Pool({
  host: 'localhost',
  database: 'touchedb_Angela',
  user: 'touchedb_Angela',
  password: 'AjZqEmyH6KvUkeTBgQym',
  port: 5432,
  ssl: false, // Since it's localhost, SSL is not needed
});

module.exports = pool;


// Test the connection once on startup
pool.connect()
  .then(client => {
    console.log("Connected to PostgreSQL database");
    client.release();
  })
  .catch(err => console.error("Database connection error:", err.stack));

// (Add your nodemailer transporter setup here or elsewhere in the file)

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like curl or mobile apps)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}));

app.options('*', cors());

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Serve booking.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "booking.html"));
});

// Simple health check route (optional, you can remove if you want)
app.get("/api-status", (req, res) => {
  res.send("API is running");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "louisphiri955@gmail.com",
    pass: "memd nauy jnmt nglw", // Use app password or environment variable in production
  },
});

// Export app and pool for external use if needed
module.exports = { app, pool };

// Checkout route
// Bookings submission
app.post("/book", async (req, res) => {
  const {
    name, email, cell, date, time, hairstyle, braids, boho, boho_updo,
    tribal, twist, hairpiece, freeHand, locks, length, size, color,
    brazilian, gents, Manicure, Pedicure, Nails, Makeup, Eyelash, approved
  } = req.body;

  const validDate = date && !isNaN(new Date(date)) ? date : null;
  const validTime = time && time !== "" ? time : null;

  try {
    // Use the pool that was initialized at the top of your file, do NOT redeclare it here
    const result = await pool.query(
      `INSERT INTO bookings 
        (name, email, cell, date, time, hairstyle, braids, boho, boho_updo,
         tribal, twist, hairpiece, freeHand, locks, length, size, color,
         brazilian, gents, Manicure, Pedicure, Nails, Makeup, Eyelash, created_at, approved) 
       VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, NOW(), $25)`,
      [
        name, email, cell, validDate, validTime, hairstyle, braids, boho, boho_updo,
        tribal, twist, hairpiece, freeHand, locks, length, size, color,
        brazilian, gents, Manicure, Pedicure, Nails, Makeup, Eyelash, approved
      ]
    );

    // Prepare and send emails as you had them
    const customerMailOptions = {
      from: "Touched by Angela <louisphiri955@gmail.com>",
      to: email,
      subject: "Booking Confirmation - Touched by Angela",
      text: `Hello ${name},

Thank you for booking with Touched by Angela! Here are your booking details:

${hairstyle}
${braids ? `💇 Braids: ${braids}` : ""}
${boho ? `💇 Boho: ${boho}` : ""}
${boho_updo ? `💇 Boho Updo: ${boho_updo}` : ""}
${tribal ? `💇 Tribal Braids: ${tribal}` : ""}
${twist ? `💇 Twists: ${twist}` : ""}
${hairpiece ? `💇 Hairpiece: ${hairpiece}` : ""}
${freeHand ? `💇 Freehand: ${freeHand}` : ""}
${locks ? `💇 Locks: ${locks}` : ""}
${brazilian ? `Brazilian: ${brazilian}` : ""}
${gents ? `Gents: ${gents}` : ""}
${Manicure ? `Manicure: ${Manicure}` : ""}
${Pedicure ? `Pedicure: ${Pedicure}` : ""}
${Nails ? `Nails: ${Nails}` : ""}
${Makeup ? `Make-up: ${Makeup}` : ""}
${Eyelash ? `Eyelash: ${Eyelash}` : ""}
📏 Size: ${size}
📏 Length: ${length}
🎨 Color: ${color}
📅 Date: ${validDate}
⏰ Time: ${validTime}

📞 Contact: ${cell}

Your booking is ${approved ? "✅ Approved" : "⏳ Pending approval"}.

Best regards,  
Touched by Angela Team`
    };

    const adminMailOptions = {
      from: "Booking APP <louisphiri955@gmail.com>",
      // to: "angeb65616@gmail.com",
      to: "louisphiri95@gmail.com",
      subject: "New Booking Notification - Touched by Angela",
      text: `Hello Angela,

A new booking has been made. Here are the details:

👤 Name: ${name}
📧 Email: ${email}
📞 Cell: ${cell}

${hairstyle}
${braids ? `💇 Braids: ${braids}` : ""}
${boho ? `💇 Boho: ${boho}` : ""}
${boho_updo ? `💇 Boho Updo: ${boho_updo}` : ""}
${tribal ? `💇 Tribal Braids: ${tribal}` : ""}
${twist ? `💇 Twists: ${twist}` : ""}
${hairpiece ? `💇 Hairpiece: ${hairpiece}` : ""}
${freeHand ? `💇 Freehand: ${freeHand}` : ""}
${locks ? `💇 Locks: ${locks}` : ""}
${brazilian ? `Brazilian: ${brazilian}` : ""}
${gents ? `Gents: ${gents}` : ""}
${Manicure ? `Manicure: ${Manicure}` : ""}
${Pedicure ? `Pedicure: ${Pedicure}` : ""}
${Nails ? `Nails: ${Nails}` : ""}
${Makeup ? `Make-up: ${Makeup}` : ""}
${Eyelash ? `Eyelash: ${Eyelash}` : ""}
📏 Size: ${size}
📏 Length: ${length}
🎨 Color: ${color}
📅 Date: ${validDate}
⏰ Time: ${validTime}
`
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    res.status(200).json({ message: "Booking saved and emails sent." });

  } catch (error) {
    console.error("❌ Booking error:", error);
    res.status(500).json({ error: "Failed to save booking" });
  }
});


// Get bookings
app.get("/bookings", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bookings ORDER BY created_at DESC");

    if (result.rows.length === 0) {
      return res.status(404).send("No bookings found");
    }

    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error fetching bookings:", error);
    res.status(500).send("Error fetching bookings");
  }
});


// Get orders
app.get("/orders", async (req, res) => {
  try {
    const pool = await pool;
    const [result] = await pool.query("SELECT * FROM orders ORDER BY id DESC");
    res.json({ orders: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Subscribe route
app.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  console.log(`New subscription: ${email}`);
  res.json({ message: "Subscription successful!" });
});


app.post('/approve-booking', async (req, res) => {
  const { bookingId } = req.body;

  try {
    // Use the existing pool directly (no re-declaration or `await`)
    const result = await pool.query('SELECT email, name FROM bookings WHERE id = $1', [bookingId]);

    if (result.rows.length === 0) {
      return res.status(404).send({ message: 'Booking not found' });
    }

    const { email, name } = result.rows[0];

    // Update booking status to approved
    await pool.query('UPDATE bookings SET approved = TRUE WHERE id = $1', [bookingId]);

    // Send approval email
    const mailOptions = {
      from: 'louisphiri95@gmail.com',
      to: email,
      subject: 'Booking Approved ✅',
      text: `Dear ${name},\n\nYour booking has been successfully approved! 🎉\nWe look forward to seeing you.\n\nBest Regards,\nTouched by Angela`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(200).send({ message: 'Booking approved and email sent' });
  } catch (err) {
    console.error('Error approving booking:', err);
    res.status(500).send({ message: 'Failed to approve booking' });
  }
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
