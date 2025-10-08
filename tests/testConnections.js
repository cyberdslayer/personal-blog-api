const pool = require('../src/config/db');

(async () => {
  try {
    const [rows] = await pool.query('SELECT NOW();');
    console.log('✅ Connected! Current time:', rows[0]);
    process.exit(0);
  } catch (err) {
    console.error('❌ Connection failed:', err);
    process.exit(1);
  }
})();
