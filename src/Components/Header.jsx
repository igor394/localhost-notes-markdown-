import { NavLink } from 'react-router-dom';

export default function Header() {
    return (

        <nav >
            <div>
                <ul>
                    <li>
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/note">Note</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/create">Create</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

