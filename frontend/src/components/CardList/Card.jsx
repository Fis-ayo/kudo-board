import { useState } from "react"
import "./Card.css"

export default function Card({ item, onVote, onDelete }) {
    const [vote, setVote] = useState(item.vote_count);

    const handleVote = () => {
        onVote();
        setVote(vote + 1);
    }

    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={item.GIF_URL} />
            <div className="card-actions">
                <button onClick={handleVote}>👍🏾{vote}</button>
                <button onClick={onDelete} className="delete-btn">Delete</button>
            </div>
        </div>
    )
}