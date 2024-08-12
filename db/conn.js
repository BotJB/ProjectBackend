const mongoose = require("mongoose");

async function connectToDatabase() {
  const databaseUri = process.env.MONGO_URI;

  if (!databaseUri) {
    console.error("MONGO_URI environment variable is not set.");
    process.exit(1); // Exit the process with an error code
  }

  try {
    await mongoose.connect(databaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with an error code
  }
}

connectToDatabase();