'use client'
import './MovieForm.css'
import {useState} from "react"

export default function MovieForm(){
    
    const [MovieTitle, setMovieTitle] = useState('');
    const [Director, setDirector] = useState('');
    const [Category, setCategory] = useState('');
    const [ReleaseDate, setReleaseDate] = useState('');
    const [Rank, setRank] = useState('');
    const [error, setError] = useState([]);

    const submit = async (e: any) => {
        e.preventDefault();

        const res = await fetch("../../API/Movie", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                MovieTitle,
                Director,
                Category,
                ReleaseDate,
                Rank
            })
        });

        const {msg} = await res.json();
        setError(msg);

        if (res.ok) {
            window.location.reload();
          }

        setMovieTitle('');
        setDirector('');
        setCategory('');
        setReleaseDate('');
        setRank('');


    };
    
    return(
        <>
        <form onSubmit={submit} className="py-4 mt-4 border-t flex flex-col gap-5">
            <div>
                <label htmlFor="movieTitle">Movie Title</label>
                <input onChange={e => setMovieTitle(e.target.value)} value={MovieTitle} type="text" id="movieTitle" />
            </div>
            <div>
                <label htmlFor="Director">Director</label>
                <input onChange={e => setDirector(e.target.value)} value={Director} type="text" id="Director" />
            </div>
            <div>
                <label htmlFor="Category">Category</label>
                <input onChange={e => setCategory(e.target.value)} value={Category} type="text" id="Category" />
            </div>
            <div>
                <label htmlFor="ReleaseDate">Release Date</label>
                <input onChange={e => setReleaseDate(e.target.value)} value={ReleaseDate} type="text" id="ReleaseDate" />
            </div>
            <div>
                <label htmlFor="Rank">Rank</label>
                <input onChange={e => setRank(e.target.value)} value={Rank} type="text" id="Rank" />
            </div>
            <button type="submit" className='submitButton'>Submit</button>
        </form>
        </>
    )
    
}