import "./NewBoard.css"
import { createBoard } from "../../services/apiClient"
import { useState } from "react";

export default function NewBoard({onClose}) {
    const [titleInput, setTitleInput] = useState('');
    const [authorInput, setAuthorInput] = useState('');
    const [catInput, setCatInput] = useState('');

    const handleCreateBoard = async() => {
        await createBoard(titleInput, catInput, authorInput);
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <form id="baord-form" onSubmit={handleCreateBoard}>
                    <h2 className="title">Create a New Board</h2>
                    <label>Title:
                        <input 
                        type="text" 
                        value={titleInput} onChange={(e)=> setTitleInput(e.target.value)}
                        required/>
                    </label>
                    <label>Category:</label>
                    <select id="cat-dropdown" value={catInput} onChange={(e)=>setCatInput(e.target.value)}>
                        <option value="">Select a category</option>
                        <option value="celebration">Celebration</option>
                        <option value="thank">Thank you</option>
                        <option value="inspiration">Inspiration</option>
                    </select>
                    <label>Author:
                        <input type="text" 
                        value={authorInput} onChange={(e)=> setAuthorInput(e.target.value)}
                        />
                    </label>
                    <button type="submit">Create a New Board</button>
                </form>
            </div>
        </div>
    )
}