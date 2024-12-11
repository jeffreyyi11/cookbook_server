import mongoose from "mongoose";

const connectToDb = async (uri: string) => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  mongoose.set('strictQuery', true);
  mongoose.connect(uri)
    .then(result => console.log('Connected to mongodb: ', result.connections[0].host))
    .catch(error => console.log('Error connecting to mongodb: ', error.message));
}

export default connectToDb;