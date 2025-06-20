import "./CardList.css";
import Card from "./Card";
import NewCard from "../CardModal/NewCard";
import { useState } from 'react';
import { deleteCard, upVote } from "../../services/apiClient";
import { useParams } from "react-router";

export default function CardList({ cards, setCards, onUpdate }) {
    const [clickedCard, setClickedCard] = useState(false);
    const params = useParams();

    const handleCardClick = () => {
        setClickedCard(true)
    }

    const handleCardDelete = async (cardId) => {
        await deleteCard(params.id, cardId);
        setCards(prevCards => prevCards.filter(card => card.id !== cardId));
    }

    const handleUpVote = async (cardId) => {
        await upVote(params.id, cardId);
    }

    const sortPinned = [...cards].sort((a, b) => {
        if(a.pinned === b.pinned) {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return b.pinned-a.pinned;
    })

    return (
        <div>
            <button
                onClick={handleCardClick}
                className="newCard">
                Create a New Card
            </button>
            <section className="cardList-container">
                {sortPinned.map((card) => (
                    <Card
                        key={card.id}
                        item={card}
                        onDelete={() => handleCardDelete(card.id)}
                        onVote={() => handleUpVote(card.id)}
                        onUpdate = {onUpdate}
                    />
                ))}
            </section>
            {clickedCard &&
                <NewCard
                    onClose={() => setClickedCard(false)}
                />
            }
        </div>
    )
}


