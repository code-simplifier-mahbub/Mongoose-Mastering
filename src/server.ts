import mongoose from "mongoose";
import app from "./app";

const port = 5000;

//database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`database connection successful`);

    //app listen
    app.listen(port, () => {
      console.log(`server app listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}
bootstrap();
