
/**
 * Props to reader this component
 * parameters: Image, Title, Description
 * { 
 *  id:1, 
 *  title:"", 
 *  image:"", 
 *  description:"", 
 *  likes: 0,
 *  like:function(id, numbLikes){ }
 * }
 * @returns 
 * 
 * React passing data to components(Downword) using props
 * Moves information back up using callback functions 
 */

import { useParams } from "react-router-dom"

export default function Movie( { id, image, title, description, likes, like, edit } ){
    const params = useParams();
    return (
        <div>
            <img src={ image } height={150} />
            <h4>{ title }</h4>
            <p>{ description }</p>
            <button type="button" onClick={like} >Like | {likes}</button>
            <a href={"/edit/"+id}>Edit</a>
        </div>
    )
}