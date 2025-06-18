import "./BoardList.css"
import Board from "./Board"

export default function BoardList({ boards, setBoards }) {
    return (
        <section className="movieList-container">
            {boards.map((board) => (
                <Board
                    key={board.id}
                    item={board}
                />
            ))}
        </section>
    )
}