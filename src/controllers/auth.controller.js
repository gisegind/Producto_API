import { validateUser } from '../services/auth.service.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function login(req, res) {
  const { username, password } = req.body;
  const userValid = await validateUser(username, password);

  if (!userValid) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
}
