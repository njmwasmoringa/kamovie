import { useState } from "react";

export default function Search( { onSearch, textSearch } ){

    /* useState return array of two items
        [ item1, item2 ]
    */
    const [formData, setFormData] = useState({
        searchText:'',
        category:''
    });
    
    function handleChange(evt){
        console.log(evt.target.name, evt.target.value);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        onSearch(formData.searchText);
    }

    return (
        <div>            
            <form onSubmit={ handleSubmit }>
                <input type="text" name="searchText" 
                    value={formData.textSearch} 
                    onChange={handleChange} 
                    placeholder="Search by title" />

        {/* <input type="text" name="category" 
                    value={formData.category} 
                    onChange={handleChange} 
                    placeholder="Search by title" /> */}

                <button>Search</button>
            </form>
        </div>
    );
}