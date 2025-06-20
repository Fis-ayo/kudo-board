import "./NewCard.css"
import { createCard } from "../../services/apiClient"
import { searchGif } from "../../services/apiGif";
import { useState } from "react";
import { useParams } from "react-router";

export default function NewCard({ onClose }) {
    const [cardTitle, setCardTitle] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const [cardOwner, setCardOwner] = useState('');
    const [cardGif, setCardGif] = useState('');
    const [gifs, setGifs] = useState([]);
    const [selectedGif, setSelectedGif] = useState(null);
    const params = useParams();

    const handleCreateCard = async () => {
        try {
            await createCard(params.id, cardTitle, cardDescription, cardOwner, selectedGif);
        } catch (err) {
            console.error(err);
        }
    }

    const handleGifSearch = async (e) => {
        e.preventDefault();
        try {
            const results = await searchGif(cardGif.trim());
            setGifs(results);
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <form id="card-form" onSubmit={handleCreateCard}>
                    <h3 className="card-title">Create a New Card</h3>
                    <input type="text"
                        placeholder="Enter card title"
                        value={cardTitle} onChange={(e) => setCardTitle(e.target.value)}
                        required />
                    <input type="text"
                        placeholder="Enter card description"
                        value={cardDescription} onChange={(e) => setCardDescription(e.target.value)}
                        required />
                    <input type="text"
                        placeholder="Search GIFs"
                        value={cardGif} onChange={(e) => setCardGif(e.target.value)}
                        required
                    />
                    <div className="gifs-container">
                        {
                            (gifs.length !== 0) ?
                                (gifs.map((gif) => (
                                    <img
                                        key={gif.id}
                                        onClick={() => { setSelectedGif(gif.images.downsized.url); setGifs([]) }}
                                        src={gif.images.downsized.url}
                                        alt={'photo of sticker'} />
                                ))) :
                                (<p>No available GIFs for you</p>)
                        }
                    </div>
                    <button onClick={handleGifSearch}>Search</button>
                    <input type="text"
                        placeholder="Enter owner"
                        value={cardOwner} onChange={(e) => setCardOwner(e.target.value)}
                    />
                    <button type="submit">Create Card</button>
                </form>
            </div >
        </div >
    )
}