import { Schema, model } from 'mongoose';

const schema = new Schema({
  selectedFile: 'String',
  movie: 'String',
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  date: {
    type: Date,
    default: new Date()
  },
});

const postModel = model('postModel', schema);

export default postModel;