import mongoose, { Schema } from 'mongoose';

// event schema definition
var eventSchema = new Schema({
  name: String,
  description: String,
  latitude: Number,
  longitude: Number,
  imageUrl: String,
});

// Export Mongoose model
export default mongoose.model('event', eventSchema);
