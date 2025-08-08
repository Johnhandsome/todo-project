const pool = require('./models/db');

describe('Database Connection', () => {
  afterAll(() => pool.end());

  it('should connect to PostgreSQL database', async () => {
    const res = await pool.query('SELECT NOW()');
    expect(res.rows.length).toBe(1);
  });
});