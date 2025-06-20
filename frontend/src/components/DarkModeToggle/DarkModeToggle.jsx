import "./DarkModeToggle.css"
import { useState, useEffect } from "react"

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('dark') === 'true';
    });

    useEffect(() => {
        darkMode ?
            document.body.classList.add('dark') : document.body.classList.remove('dark');

        localStorage.setItem('dark', darkMode);
    }, [darkMode])

    return (
        <label className="switch">
            <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
            />
            <span className="slider round"></span>
        </label>
    );
};