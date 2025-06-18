import "./SearchBar.css"

export default function SearchBar() {
    return (
        <main className="search">
            <input className="search-input" placeholder="Search boards..." />
            <button className="button search-btn">Search</button>
            <button className="button clear-btn">Clear</button>
        </main>
    )
}