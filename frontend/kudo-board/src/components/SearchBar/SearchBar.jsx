import { useState } from "react"
import "./SearchBar.css"

export default function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState();

    const handleSearchChange = (e) =>{
        setSearchQuery(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchQuery){
            setSearchQuery(searchQuery.trim());
            onSearch(searchQuery.trim())
        }
    };

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            if(searchQuery) {
                setSearchQuery(searchQuery.trim())
                onSearch(searchQuery.trim())
            }
        }
    }

    const handleClear = (e) => {
        setSearchQuery("");
        onSearch("");
    };

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search boards..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
            />
            <button type="submit" className="button search-btn">Search</button>
            <button onClick={handleClear} className="button clear-btn">Clear</button>
        </form>
    )
}