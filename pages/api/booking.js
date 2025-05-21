// pages/api/booking.js

export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://www.touchedbyangela.co.za');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json({ message: 'Bookings fetched successfully!' });
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'Booking saved successfully!' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
