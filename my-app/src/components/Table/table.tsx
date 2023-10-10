'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import './table.css';
import {notFound} from 'next/navigation'

async function getData(){
    const res = await fetch('http://localhost:3000/API/Movie');
    if(!res.ok) return notFound();
    return res.json();

}
export default function Table(){

    // const data = await getData();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const responseData = await getData();
            setData(responseData);
        }
        fetchData();
    }, [])
    
    return (
      <>
        <div className="table-responsive">
            <table className="table table-striped">
                <caption className="sr-only">Example responsive table with striped rows</caption>
                <thead>
                    <tr>
                        <th scope="col">Movie Title</th>
                        <th scope="col">Director</th>
                        <th scope="col">Category</th>
                        <th scope="col">Release Date</th>
                        <th scope="col">Rank</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((movie: any) => (
                    <tr key={movie._id}>
                        <td>{movie.MovieTitle}</td>
                        <td>{movie.Director}</td>
                        <td>{movie.Category}</td>
                        <td>{movie.ReleaseDate}</td>
                        <td>{movie.Rank}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      </>
  
    )
  }
