import { useEffect, useState } from "react"
import "./Board.css"
import { Link } from "react-router-dom"
import { getGifUrl } from "../../services/apiGif"

export default function BoardCard({ item, onDelete }) {
    const [gifUrl, setGifUrl] = useState(null);

    useEffect(() => {
        const fetchGif = async () => {
            const url = await getGifUrl();
            setGifUrl(url);
        };
        fetchGif();
    }, []);

    return (
        <div className="board-card">
            <img
                className="board-img-gif"
                src={gifUrl}
                alt={item.title + 'board Gif'}
            />
            <div className="board-content">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <div className="board-actions">
                    <button className="view-btn">
                        <Link
                            to={`/board/${item.id}`} >
                            View Board
                        </Link>
                    </button>
                    <button onClick={onDelete} className="del-btn">Delete Board</button>
                </div>
            </div>
        </div>
    )
}