import { useState, useEffect } from "react";
import { getBoards, searchBoard } from "../../services/apiClient";
import BoardList from "../../components/BoardList/BoardList"
import SearchBar from "../../components/SearchBar/SearchBar"
import FilterBoards from "../../components/FilterBoards/FilterBoards"
import "./Home.css";

export default function Home() {
    const [boards, setBoards] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState("")

    const getData = async () => {
        const results = await getBoards();
        setBoards(results);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = async (query) => {
        const results = await searchBoard(query);
        if (results.length === 0) setEmptyMessage("No boards available");
        else setBoards(results);
    };

    return (
        <main>
            <section className="toolbar-container">
                <SearchBar
                    onSearch={handleSearch}
                />
                <FilterBoards />
            </section>
            {emptyMessage ?
                (<p>{emptyMessage}</p>) :
                (<BoardList
                    board={boards}
                    setBoards={setBoards}
                />
                )}
        </main>
    )
}