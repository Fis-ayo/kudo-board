import './Header.css'
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"


export default function Header() {
    return (
        <header className='banner'>
            <h1 className='title'>Kudos Board</h1>
            <div className='toggle'><p>Mode</p><DarkModeToggle /></div>
        </header>
    )
}