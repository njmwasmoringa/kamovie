import NavBar from "../navbar/NabBar";
import Search from "../search/Search";

export default function TopBar({ onSearch }){
    return (
        <div>
            <h3>Movie List</h3>
            <NavBar />
            <Search onSearch={onSearch} />
        </div>
    )
}