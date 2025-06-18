import "./NavigationBar.css"

export default function NavigationBar() {
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
