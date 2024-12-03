import "./DetailView.css";
import axios from 'axios';
import {useEffect} from 'react';
import {useParams} from 'react-router';

function DetailView(){
    const params = useParams();
    useEffect(()=>{
        console.log(params.id);
    },[]);
    
    useEffect(() => {
        (async function getGenre() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
            );

            console.log(response);
        })()
    }, []);

    return(
        <h1>Detail View</h1>
    )
}

export default DetailView;