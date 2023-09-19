//boilerplate code
const mongoose = require('mongoose');
//mongoose
//mongoose
//webpack
const connectDB = () => {
  const connectionString = 'mongodb+srv://jas0430:Wr5kilCG1o2EQmSe@wpt-42.yjrdn5e.mongodb.net/?retryWrites=true&w=majority';

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
  });

  mongoose.connection.on('error', (error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
  });
}

module.exports = connectDB;

