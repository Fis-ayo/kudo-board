import { useEffect, useState } from "react";
import NewComment from "../CommentModal/NewComment";
import "./Card.css";
import { getPin } from "../../services/apiClient";
import { useParams } from "react-router";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import {FaThumbtack, FaComments, FaTrashAlt} from 'react-icons/fa'

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
            setIsPinned(updated.data.pinned);
            onUpdate(updated);
        } catch (err) {
            console.error("Failed to pin or unpin", err);
        }
    }

    return (
        <div className="card">
            <div className="img-wrapper">
                <img className="card-img" src={item.GIF_URL} />
                <div className="overlay-icons">
                    <button className="icon pin-btn" onClick={handlePinClick} title={isPinned ? "unpin" : "Pin"}>
                        <FaThumbtack className={isPinned ? 'pinned' : ''} />
                    </button>
                    <button className="icon comment-btn" onClick={handleCommentClick} title="Comments">
                        <FaComments />
                    </button>
                </div>
            </div>

            <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>


            <div className="card-actions">
                <button onClick={handleVote} className="vote-btn"><BsFillHandThumbsUpFill />Upvote: {vote}</button>
                <button onClick={onDelete} className="delete-btn"><FaTrashAlt />Delete</button>
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