import mongoose from "mongoose";
import userModel from "./userModel.js";
import messageModel from "./messageModel.js";

const conversationSchema = mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: messageModel,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const conversationModel = mongoose.model("conversation", conversationSchema);

export default conversationModel;
