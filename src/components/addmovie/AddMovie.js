import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AddMovie({ onMovieAdded }) {

    const [formData, setFormData] = useState({
        title:'',
        category:'',
        description:'',
        image:''
    });

    const params = useParams();
    const [id, setId] = useState(params.movieid);

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:3009/movies/${id}`).then(resp=>resp.json()).then(movie=>{
                setFormData(movie);
            })
        }
    }, [id]); 

    function handleAddMovie(event) {
        event.preventDefault();
        console.log(formData);
        fetch(`http://localhost:3009/movies${id ? '/'+id : ''}`, { 
            body: JSON.stringify(formData), 
            method: id ? "PATCH" : "POST",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response => response.json())
        .then(newMovie=>{
            console.log(newMovie);
            onMovieAdded(newMovie);
        });
    }

    function onInputChange(event){
        console.log(event.target);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return <form onSubmit={handleAddMovie}>
        <div>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={onInputChange} />
        </div>
        <div>
            <input type="text" name="category" placeholder="Category" value={formData.category} onChange={onInputChange} />
        </div>
        <div>
            <textarea rows="5" name="description" placeholder="Description" value={formData.description} onChange={onInputChange}></textarea>
        </div>
        <div>
            <input type="text" name="image" placeholder="Title" value={formData.image} onChange={onInputChange} />
        </div>

        <div>
            <button type="submit" >Add Movie</button>
        </div>
    </form>
}