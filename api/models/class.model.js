import mongoose from 'mongoose';

const classSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    members: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference to the User model
        },
        joinedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    joinRequests: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference to the User model
        },
        requestedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    classPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post', // Reference to the Post model
      },
    ],
  },
  { timestamps: true }
);

const Class = mongoose.model('Class', classSchema);

export default Class;
