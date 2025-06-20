import "./FilterBoards.css"

export default function FilterBoards({setFilterOption}) {
    return (
        <nav>
            <div className="top-nav">
                <button onClick={()=> setFilterOption("All")}>All</button>
                <button onClick={()=> setFilterOption("Recent")}>Recent</button>
                <button onClick={()=> setFilterOption("Celebration")}>Celebration</button>
                <button onClick={()=> setFilterOption("Thank You")}>Thank You</button>
                <button onClick={()=> setFilterOption("Inspiration")}>Inspiration</button>
            </div>
        </nav>
    )
}
