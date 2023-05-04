import User from '../models/User.js';

export const createUser = async (req, res, next) => {
  const newHotel = new User(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedHotel = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted.');
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const hotel = await User.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const hotels = await User.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
