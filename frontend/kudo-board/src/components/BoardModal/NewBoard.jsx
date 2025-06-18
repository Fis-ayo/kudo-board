import "./NewBoard.css"

export default function NewBoard() {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <form>
                    <h2 className="title">Create a New Card</h2>
                    <input type="text" placeholder="Enter a card title" required/>
                    <input type="text" placeholder="Enter a card description" required/>
                    <input type="text" placeholder="Search GIFs" required/>
                    <button>Search</button>
                    <input type="text" placeholder="Enter GIF url" />
                    <button>Copy GIF URL</button>
                    <input type="text" placeholder="Enter Owner" />
                </form>
            </div>
        </div>
    )
}