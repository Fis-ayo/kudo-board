import "./FilterBoards.css"

export default function FilterBoards() {
    return (
        <nav className="">
            <div className="top-nav">
                <button>All</button>
                <button>Recent</button>
                <button>Celebration</button>
                <button>Thank You</button>
                <button>Inspiration</button>
            </div>
            <button className="bottom-nav">Create New Board</button>
        </nav>
    )
}
