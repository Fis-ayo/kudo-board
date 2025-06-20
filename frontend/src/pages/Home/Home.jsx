import { useState, useEffect } from "react";
import { getBoards, searchBoard } from "../../services/apiClient";
import BoardList from "../../components/BoardList/BoardList"
import SearchBar from "../../components/SearchBar/SearchBar"
import FilterBoards from "../../components/FilterBoards/FilterBoards"
import "./Home.css";

export default function Home() {
    const [boards, setBoards] = useState([]);
    const [allBoards, setAllBoards] = useState([])
    const [emptyMessage, setEmptyMessage] = useState("");
    const [filterOption, setFilterOption] = useState("");

    const getData = async () => {
        const results = await getBoards();
        setAllBoards(results)
        setBoards(results);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = async (query) => {
        if (!query) {
            setBoards(allBoards);
            setEmptyMessage('');
            return;
        }
        const results = await searchBoard(query);
        if (results.length === 0) setEmptyMessage("No boards available");
        else setEmptyMessage('');

        setBoards(results);
    };

    const handleFilter = () => {
        const results = allBoards.slice();

        if (filterOption === "All") {
            getData();
            return
        };

        if (filterOption === "Recent") {
            const sorted = results.sort((a, b) => b.id - a.id);
            setBoards(sorted);
            return;
        };

        const categoryMap = {
            "Celebration": "celebration",
            "Thank You": "thank",
            "Inspiration": "inspiration"
        };

        const categoryValue = categoryMap[filterOption];
        if (categoryValue) {
            const filtered = results.filter(board => board.category === categoryValue);
            setBoards(filtered);
        }
    }

    useEffect(() => {
        handleFilter();
    }, [filterOption]);

    return (
        <main>
            <section className="toolbar-container">
                <div className="toolbar">
                    <SearchBar onSearch={handleSearch} />
                    <FilterBoards setFilterOption={setFilterOption} />
                </div>
            </section>
            {emptyMessage ?
                (<p>{emptyMessage}</p>) :
                (<BoardList
                    boards={boards}
                    setBoards={setBoards}
                />
                )}
        </main>
    )
}