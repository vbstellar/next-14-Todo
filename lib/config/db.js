import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vishu:wM53LkbjEbmOUbwg@cluster0.yf6rpar.mongodb.net/todo-app"
  );
  console.log("db connected");
};
