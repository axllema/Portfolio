import { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../scss/style.scss';

const setHash = (hash) => {
    // modifies the hash in the URL of the page
    window.document.location.hash = hash;
};

const menuItems = [
    { label: 'À propos', hash: '#about' },
    { label: 'Compétences', hash: '#skills' },
    { label: 'Projets', hash: '#projects' },
    { label: 'Contact', hash: '#contact' }
];

function Menu() {
        const [selectedItem, setSelectedItem] = useState(null);
    
        const handleClick = (hash) => {
            setSelectedItem(hash);
            setHash(hash);
        };

    
    return (
        <ul className="main-nav-anchor">
            {menuItems.map(item => (
                <li key={item.hash}>
                    <a
                        href={item.hash}
                        onClick={() => handleClick(item.hash)}
                        style={{ textDecoration: selectedItem === item.hash ? 'underline' : 'none' }}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Menu;