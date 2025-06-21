import "./CardList.css";
import Card from "./Card";
import NewCard from "../CardModal/NewCard";
import { useEffect, useState } from 'react';
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
        if (a.pinned === b.pinned) {
            return b.id - a.id;
        }
        return b.pinned - a.pinned;
    })

    useEffect(() => {
        sortPinned;
    }, [])

    return (
        <div className="cardList-page">
            <div className="cardList-top">
                <button
                    onClick={handleCardClick}
                    className="newCard">
                 + Create Card
                </button>
            </div>
            <section className="cardList-container">
                {sortPinned.map((card) => (
                    <Card
                        key={card.id}
                        item={card}
                        onDelete={() => handleCardDelete(card.id)}
                        onVote={() => handleUpVote(card.id)}
                        onUpdate={onUpdate}
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


