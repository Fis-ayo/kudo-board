import "./NewComment.css"
import { useState, useEffect} from "react";
import { createComment, getComments } from '../../services/apiClient'
import { useParams } from 'react-router';

export default function NewComment({ card, onClose }) {
    const [commentText, setCommentText] = useState("");
    const [commentAuthor, setCommentAuthor] = useState("");
    const [comments, setComments] = useState([]);
    const params = useParams();

    const handleCreateComment = async (e) => {
        e.preventDefault();
        try {
            await createComment(params.id, card.id, commentText, commentAuthor);
            const newComment = getAllComments();
            setComments([...comments, newComment]);
        } catch (err) {
            console.error("Error adding comments", err)
        }
    }

    const getAllComments = async () => {
        try {
            const results = await getComments(params.id, card.id);
            setComments(results);
        } catch (err) {
            console.error("Error fetching comments", err)
        }
    }

    useEffect(() => {
        getAllComments();
    }, [])

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-container' onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>{card.title}</h2>
                <img src={card.GIF_URL} alt={"GIF Image"} />
                <p>{card.owner}</p>
                <form id='comment-form' >
                    <h3>Add a Comment</h3>
                    <input
                        type='text'
                        placeholder='Comment...'
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        required
                    />
                    <input
                        type='text'
                        placeholder='author'
                        value={commentAuthor}
                        onChange={(e) => setCommentAuthor(e.target.value)}
                    />
                    <button onClick={handleCreateComment}>Add Comment</button>
                </form>
                <div className="card-comments">
                    <h3>Comments</h3>
                    {comments.map(comment => (
                        <div>
                            <p>{comment.text}</p>
                            <p>{comment.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}   