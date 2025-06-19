import "./BoardDetails.css"
import CardList from "../../components/CardList/CardList"
import { Link } from "react-router"

export default function Board() {
    return(
        <div className="">
            <Link to="/">Back to Home</Link>
            <button>Create a Card</button>
            <CardList />
        </div>
    )
    
}