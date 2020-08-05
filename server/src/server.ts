import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

app.post('/users', (req, res) => {
  const users = [
    { name: 'John', age: 20 },
    { name: 'Maria', age: 19 },
    { name: 'José', age: 30 }
  ]
  return res.json(users);
});

app.listen(3333);
