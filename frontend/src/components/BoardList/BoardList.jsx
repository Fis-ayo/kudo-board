import "./BoardList.css";
import Board from "./Board";
import NewBoard from "../BoardModal/NewBoard";
import {useState} from 'react';
import { deleteBoard } from "../../services/apiClient";

export default function BoardList({ boards, setBoards }) {
    const [clickedBoard, setClickedBoard] = useState(false);

    const handleBoardClick = () => {
        setClickedBoard(true);
    }

    const handleBoardDelete = async(boardId) => {
        await deleteBoard(boardId);
        setBoards(prevBoards => prevBoards.filter(board => board.id !== boardId))
    }

    return (
        <div>
            <button
                onClick={handleBoardClick}
                className="newBoard">
                + New Board
            </button>
            <section className="boardList-container">
                {boards.map((board) => (
                    <Board
                        key={board.id}
                        item={board}
                        onClick={handleBoardClick}
                        onDelete={() => handleBoardDelete(board.id)}
                    />
                ))}
            </section>
            {clickedBoard &&
                <NewBoard
                    onClose={() => setClickedBoard(false)} />}
        </div>
    )
}