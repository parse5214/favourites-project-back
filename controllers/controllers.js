import mongoose from 'mongoose';
import postModel from '../models/models.js';

export const getPosts = async(req, res) => {

  try {

    const posts = await postModel.find();
    res.status(200).json(posts);

  } catch (error) {

    res.status(404).json({ message: error.message });
    console.log(error);

  }

};

export const createPost = async(req, res) => {

  const newPost = postModel(req.body);

  try {

    await newPost.save();

    res.status(201).json(newPost);

  } catch (error) {

    res.status(409).json({ message: error.message });
    console.log(error);

  }
};

export const updatePost = async(req, res) => {

  const { id } = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

  const updatedPost = await postMessage.findByIdAndUpdate(id, post, { new : true });

  res.json(updatedPost);
}

export const deletePost = async(req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

  await postMessage.findByIdAndRemove(id);

  res.json( { message: 'Post deleted successfully' } );
}