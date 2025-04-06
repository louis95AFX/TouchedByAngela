const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const pool = new Pool({
  user: "postgres",
  host: "tramway.proxy.rlwy.net",
  database: "railway",
  password: "kvDUeCiOmhyzAFkOPIaTTaiMOHlnLFfj",
  port: 12253,
  ssl: { rejectUnauthorized: false },
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());  // Ensure this middleware is in place to parse JSON data


// Serve static files from the root directory (e.g., booking.html)
app.use(express.static(path.join(__dirname)));

// Route to serve booking.html when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "booking.html"));
});

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

  app.get("/bookings", async (req, res) => {
    try {
      // Check if we can connect to the database
      const connectionCheck = await pool.query('SELECT NOW()');
      console.log('Database connected at:', connectionCheck.rows[0].now);
    
      // Now proceed to fetch the bookings
      const result = await pool.query('SELECT * FROM "Touched_by_angela"."bookings"');
      
      if (result.rows.length === 0) {
        return res.status(404).send('No bookings found');
      }
    
      res.json(result.rows);  // Send the bookings as a JSON response
    } catch (error) {
      console.error("❌ Error fetching bookings:", error);
      res.status(500).send('Error fetching bookings');
    }
  });
  
  

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "louisphiri955@gmail.com", // Your Gmail
    pass: "memd nauy jnmt nglw", // Generated App Password
  },
});

app.post('/subscribe', (req, res) => {
  console.log(req.body);  // Log the request body to see what is being sent
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  console.log(`New subscription: ${email}`);
  
  res.json({ message: "Subscription successful!" });
});


// Endpoint to handle form submission
app.post("/book", async (req, res) => {
  const { 
    name, email, cell, date, time, hairstyle, braids, boho, boho_updo, 
    tribal, twist, hairpiece, freeHand, locks, length, size, color, 
    brazilian, gents, Manicure, Pedicure, Nails, Makeup, Eyelash, approved 
  } = req.body;

  // Validate date - if it's an empty string, set it to null or current date
  const validDate = date && !isNaN(new Date(date)) ? date : null;  // Set default to null if invalid
  
  // Validate time - if it's an empty string, set it to null or a default time (e.g., current time)
  const validTime = time && time !== "" ? time : null;  // Set default to null if invalid

  try {
    const result = await pool.query(
      `INSERT INTO "Touched_by_angela"."bookings" 
        (name, email, cell, date, time, hairstyle, braids, boho, boho_updo,
         tribal, twist, hairpiece, freeHand, locks, length, size, color, 
         brazilian, gents, Manicure, Pedicure, Nails, Makeup, Eyelash, created_at, approved) 
       VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, 
         $18, $19, $20, $21, $22, $23, $24, NOW(), $25) 
       RETURNING *`,
      [name, email, cell, validDate, validTime, hairstyle, braids, boho, boho_updo, 
       tribal, twist, hairpiece, freeHand, locks, length, size, color, 
       brazilian, gents, Manicure, Pedicure, Nails, Makeup, Eyelash, approved]
    );

    // Email content for customer
    const customerMailOptions = {
      from: "louisphiri955@gmail.com",
      to: email, // Sending to the customer
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
📅 Date: ${date}
⏰ Time: ${time}

📞 Contact: ${cell}

Your booking is ${approved ? "✅ Approved" : "⏳ Pending approval"}.

Best regards,  
Touched by Angela Team
`,
    };

    // Email content for admin
    const adminMailOptions = {
      from: "louisphiri955@gmail.com",
      to: "angeliabnsalon@gmail.com", // Sending to the admin
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
📅 Date: ${date}
⏰ Time: ${time}

📌 Approval Status: ${approved ? "✅ Approved" : "⏳ Pending approval"}.

Please review the booking and take necessary actions.

Best regards,  
Touched by Angela System
`,
    };

    // Send emails to both customer and admin
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(201).json({ message: "Booking saved and emails sent successfully!", booking: result.rows[0] });
  } catch (error) {
    console.error("❌ Error saving booking:", error);s
    res.status(500).json({ error: "Error saving booking" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
