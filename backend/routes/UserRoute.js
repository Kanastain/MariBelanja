const express = require('express');

const {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
} = require('../controllers/Users');

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.put('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);

module.exports = router;
