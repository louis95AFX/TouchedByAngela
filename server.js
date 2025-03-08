const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const pool = new Pool({
    user: 'postgres', 
    host: 'tramway.proxy.rlwy.net', 
    database: 'railway', 
    password: 'kvDUeCiOmhyzAFkOPIaTTaiMOHlnLFfj', 
    port: 12253, 
    ssl: { rejectUnauthorized: false }
});

app.use(cors());
app.use(bodyParser.json());

// Test database connection
pool.connect()
  .then(client => {
    console.log("✅ Connected to PostgreSQL");
    return client.query('SELECT current_database();')
      .then(res => {
        console.log('Connected to database:', res.rows[0].current_database);
        client.release();
      });
  })
  .catch(err => {
    console.error("❌ PostgreSQL Connection Error:", err);
    process.exit(1);
  });

// Endpoint to handle form submission into Touched_by_angela schema
app.post("/book", async (req, res) => {
    const {
        name, email, cell, hairstyle, size, length, color, date, time, approved
    } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO "Touched_by_angela"."bookings"  (
                name, email, cell, hairstyle, size, length, color, date, time, created_at, approved
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), $10
            ) RETURNING *`,
            [
                name, email, cell, hairstyle, size, length, color, date, time, approved
            ]
        );

        res.status(201).json({ message: "Booking saved successfully!", booking: result.rows[0] });
    } catch (error) {
        console.error("❌ Error saving booking:", error);
        res.status(500).json({ error: "Error saving booking" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
