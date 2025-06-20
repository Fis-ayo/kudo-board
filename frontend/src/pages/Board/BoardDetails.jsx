import "./BoardDetails.css"
import CardList from "../../components/CardList/CardList"
import { Link, useParams } from "react-router"
import { useEffect, useState } from "react"
import { getCards } from "../../services/apiClient"

export default function BoardDetails() {
    const [cards, setCards] = useState([])
    const params = useParams();

    const getCardsData = async () => {
        const results = await getCards(params.id);
        setCards(results);
    }

    useEffect(() => {
        getCardsData();
    }, [])

    const handleCardUpdate = (newCard) => {
        setCards(prev => prev.map(card => {
            if(card.id === newCard.id)return newCard
            else return card
        }));
    };

    return (
        <div className="">
            <Link to="/">Back to Home</Link>
            <CardList
                cards={cards}
                setCards={setCards}
                onUpdate = {handleCardUpdate} />
        </div>
    )

}