const User = require('../models/User');

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering user');
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      res.status(401).send('Invalid email or password');
    } else {
      const isValid = await user.comparePassword(req.body.password);
      if (!isValid) {
        res.status(401).send('Invalid email or password');
      } else {
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.SECRET_KEY);
        res.json({ token });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving users');
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).exec();
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user');
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating user');
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id).exec();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting user');
  }
};

module.exports = { register, login, getUsers, getUser, updateUser, deleteUser };