import { Router } from 'express';

const router = Router();


router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;


  if (email === 'user@example.com' && password === 'password') {
    res.json({
      success: true,
      message: 'Login successful',
      token: 'fake-jwt-token'
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

router.post('/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.json({
      success: true,
      message: 'User registered successfully',
      user: { email }
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
});

export { router };