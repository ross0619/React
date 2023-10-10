import { NextResponse } from 'next/server'
import mongoose from 'mongoose';
import connectDB from "@/app/lib/mongo"
import Movie from '@/app/models/movie'

export async function POST(req){
    const {MovieTitle, Director, Category, ReleaseDate, Rank} = await req.json();

    try{
        await connectDB();
        await Movie.create({MovieTitle, Director, Category, ReleaseDate, Rank})
        return NextResponse.json({
            msg: ["Message successfully sent"],
            success: true,
        });
    }catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
          const errorList = Object.values(error.errors).map((error) => error.message);
          return NextResponse.json({ msg: errorList });
        } else {
          console.error('Database Error:', error); // Log the error for debugging
          return NextResponse.json({ msg: 'Unable to send message' });
        }
      }
}
export async function GET(req){
    try{
        await connectDB();
        const movies = await Movie.find();
        return new NextResponse(JSON.stringify(movies));
    }catch(error){
        return new NextResponse('Unable to get movies s', error);
    }
}