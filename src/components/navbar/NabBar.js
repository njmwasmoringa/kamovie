import { NavLink } from "react-router-dom";

export default function NavBar(){
    return <ul>
    <NavLink to="/">Movies</NavLink>
        <NavLink to="/addMovie">Add Movie</NavLink>
    </ul>
}