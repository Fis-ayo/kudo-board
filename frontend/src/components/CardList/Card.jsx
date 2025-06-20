import { useEffect, useState } from "react";
import NewComment from "../CommentModal/NewComment";
import "./Card.css";
import { getPin } from "../../services/apiClient";
import { useParams } from "react-router";

export default function Card({ item, onVote, onDelete, onUpdate }) {
    const [vote, setVote] = useState(item.vote_count);
    const [addComment, setAddComment] = useState(false);
    const [isPinned, setIsPinned] = useState(item.pinned);
    const params = useParams();

    const handleVote = () => {
        onVote();
        setVote(vote + 1);
    }

    const handleCommentClick = () => {
        setAddComment(true);
    }

    const handlePinClick = async () => {
        try {
            const updated = await getPin(params.id, item.id);
            setIsPinned(updated.pinned);
            onUpdate(updated);
        } catch (err) {
            console.error("Failed to pin or unpin", err);
        }
    }

    return (
        <div>
            <button onClick={handlePinClick}>
                {isPinned ? "unpin" : "Pin" }
            </button>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={handleCommentClick}>Comments</button>
            <img src={item.GIF_URL} />
            <div className="card-actions">
                <button onClick={handleVote}>👍🏾 Upvote: {vote}</button>
                <button onClick={onDelete} className="delete-btn">Delete</button>
            </div>

            {addComment &&
                <NewComment
                    card={item}
                    onClose={() => setAddComment(false)}
                />
            }
        </div>
    )
}