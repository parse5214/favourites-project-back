import { Schema, model } from 'mongoose';

const schema = new Schema({
  user: 'String',
  book: 'String',
  movie: 'String',
  date: {
    type: Date,
    default: new Date()
  },
});

const postModel = model('postModel', schema);

export default postModel;