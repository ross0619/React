import mongoose from   'mongoose'

const connectDB = async () => {
    try{
        if(mongoose.connection.readyState === 0){
            await mongoose.connect('mongodb+srv://ross0619:050101apr@cluster0.25lv8wl.mongodb.net/movies_db?retryWrites=true&w=majority'
            );
            console.log('db connected');
        }
    }catch(error){
        console.log(error);
    }
}

export default connectDB;