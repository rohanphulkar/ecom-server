import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s]+$/,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[0-9]+$/,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  files: [
    {
      type: String,
    },
  ],
});

export const User = mongoose.model("User", userSchema);
