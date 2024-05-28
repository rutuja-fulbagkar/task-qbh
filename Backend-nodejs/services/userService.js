const User = require('../models/user');

async function addUser(userData) {
  return await User.create(userData);
}

async function getAllUsers() {
  return await User.findAll();
}

async function getUserById(id) {
  return await User.findByPk(id);
}

async function updateUser(id, userData) {
  await User.update(userData, { where: { id } });
  return getUserById(id);
}

async function deleteUser(id) {
  return await User.destroy({ where: { id } });
}



module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
