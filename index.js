const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'maglev.proxy.rlwy.net',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'YtyzuxzYXdcDDwnsoVqKAZMsuOjOoIqS',
  database: process.env.DB_NAME || 'railway'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// ✅ Add root route to test if server is running
app.get('/', (req, res) => {
  res.send('🎉 Backend is running successfully!');
});

// API route to check results
app.get('/api/results', (req, res) => {
  const { student_id, first_name } = req.query;
  const query = 'SELECT * FROM results WHERE student_id = ? AND LOWER(name) LIKE LOWER(?)';

  db.query(query, [student_id, `${first_name}%`], (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    if (results.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(results[0]);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
