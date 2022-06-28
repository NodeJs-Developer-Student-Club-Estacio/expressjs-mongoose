import mongoose, { mongo, Mongoose } from "mongoose";

mongoose.connect('mongodb://docker:mongopw@localhost:49153', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
  console.log('✅ mongodb connected successfully');
})
.catch(err => {
  console.log('Error connecting to MongoDB:', err.message);
});

mongoose.Promise = global.Promise;

const database = mongoose.connection;

database.on(
  "error",
  console.error.bind(console, "❌ mongodb connection error"),
);

module.exports = mongoose;