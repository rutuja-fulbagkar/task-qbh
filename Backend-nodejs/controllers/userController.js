const userService = require('../services/userService');
const pdfGenerator = require('../utils/pdfGenerator');

async function createUser(req, res) {
  const userData = req.body;
  try {
    const newUser = await userService.addUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUser(req, res) {
  const id = req.params.id;
  try {
    const user = await userService.getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  const id = req.params.id;
  const userData = req.body;
  try {
    const updatedUser = await userService.updateUser(id, userData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  const id = req.params.id;
  try {
    await userService.deleteUser(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function generatePdf(req, res) {
  const id = req.params.id;
  try {
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const pdfBuffer = await pdfGenerator.generateUserPdf(user);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=user_${id}.pdf`);
    res.end(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  generatePdf
};
