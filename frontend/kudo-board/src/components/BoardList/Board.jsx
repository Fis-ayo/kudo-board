import "./Board.css"

export default function BoardCard() {
    return (
        <div className="board-preview">
            <img
                src={'https://picsum.photos/200/300'}
                alt={"Photo Alt"}
            />
            <h3></h3>
            <p></p>
            <div className="board-actions">
                <a></a>
                <button>Delete Board</button>
            </div>
        </div>
    )
}