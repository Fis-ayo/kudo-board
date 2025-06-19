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

    return(
        <div className="">
            <Link to="/">Back to Home</Link>
            <CardList 
            cards={cards}
            setCards={setCards}/>
        </div>
    )
    
}