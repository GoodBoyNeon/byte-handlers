import { connect } from "mongoose";

export const databaseConnect = async () => {
  await connect(process.env.MONGO_URI);
  console.log("Connected to database!");
};
