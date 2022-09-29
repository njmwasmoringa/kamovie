import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function MovieList( { movies } ){    

    function likeMovie(){
        // setHasLiked(true);
    }

    return (
        <div>
            { movies.map(movie=><Movie 
                key={movie.id} 
                id={movie.id}
                like={likeMovie}
                title={movie.title}
                description={movie.description}
                image={movie.image}
                likes={movie.likes}
            />) }
        </div>
    );
}