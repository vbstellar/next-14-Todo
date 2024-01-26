import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true }
);

const TodoModel = mongoose.models.todo || mongoose.model("Todo", Schema);
export default TodoModel;