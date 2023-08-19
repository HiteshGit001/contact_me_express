import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactMeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  }
})

const ContactMe = mongoose.model('ContactMe', contactMeSchema);
export default ContactMe;