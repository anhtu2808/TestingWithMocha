// server.js
import express from 'express';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { nanoid } from 'nanoid';

const app = express();

app.use(express.json()); // Middleware để phân tích JSON

// Thiết lập LowDB với dữ liệu mặc định
const adapter = new JSONFile('db.json');
const db = new Low(adapter, { users: [] }); // Add default data here


// Hàm khởi tạo dữ liệu nếu database rỗng
async function initializeDB() {
  await db.read();
  if (!db.data) {
    db.data = { users: [] }; // Cung cấp dữ liệu mặc định nếu db.data chưa được thiết lập
    await db.write();
  }
}

// Gọi hàm initializeDB để đảm bảo dữ liệu khởi tạo
await initializeDB();

// API: Lấy tất cả người dùng
app.get('/users', async (req, res) => {
  await db.read();
  res.json(db.data.users);
});

// API: Lấy thông tin một người dùng theo ID
app.get('/users/:id', async (req, res) => {
  await db.read();
  const user = db.data.users.find(user => user.id === req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// API: Tạo người dùng mới
app.post('/users', async (req, res) => {
  const { name, email, yob } = req.body;
  const newUser = {
    id: nanoid(),
    name,
    email,
    yob
  };
  await db.read();
  db.data.users.push(newUser);
  await db.write();
  res.status(201).json(newUser);
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
