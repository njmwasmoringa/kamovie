import Search from "../search/Search";

export default function TopBar({ onSearch }){
    return (
        <div>
            <h3>Movie List</h3>
            <Search onSearch={onSearch} />
        </div>
    )
}