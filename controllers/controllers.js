import postModel from '../models/models.js';

export const getPosts = async(req, res) => {

  try {

    const posts = await postModel.find();
    res.status(200).json(posts);

  } catch (error) {

    res.status(404).json({ message: error.message });

  }

};

export const createPost = async(req, res) => {

  const newPost = postModel(req.body);

  try {

    await newPost.save();

    res.status(201).json(newPost);

  } catch (error) {

    res.status(409).json({ message: error.message });

  }
};