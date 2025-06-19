import { useEffect, useState } from "react"
import "./Board.css"
import { Link } from "react-router-dom"
import { getGifUrl } from "../../services/apiGif"

export default function BoardCard({ item }) {
    const [gifUrl, setGifUrl] = useState(null);

    useEffect(() => {
        const fetchGif = async () => {
            const url = await getGifUrl();
            setGifUrl(url);
        };
        fetchGif();
    }, []);
    return (
        <div className="board-preview">
            <img
                className="board-img-gif"
                src={gifUrl}
                alt={item.title + 'board Gif'}
            />
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <div className="board-actions">
                <Link 
                to={`/board/${item.id}`} state={{title:item.title}}>
                    View Board
                </Link>
                <button>Delete Board</button>
            </div>
        </div>
    )
}