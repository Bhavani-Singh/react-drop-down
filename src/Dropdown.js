import { useState } from "react";

const Dropdown = () => {

    const [isActive, setActive] = useState(false);
    const [list] = useState(["Sure, because dropdowns are just so user-friendly.",
    "Absolutely, because everyone loves endless dropdown menus.",
    "Why not? Dropdowns bring joy to user interfaces.",
    "Definitely, because life is incomplete without dropdowns.",
    "Of course, because dropdowns make everything better."]);
    const [value, setValue] = useState('');

    const onClickHandeler = (e) => {
        setValue(e.target.textContent);
        setActive(false);
    }

    const onMouseHover = () => {
        setActive(true);
    }

    const results = list.map((result, index) => {
        return <a href="#" onClick={onClickHandeler} key={index}>{result}</a>;
    })

    return (
        <div className="dropdown">
            <h1>Should we use a dropdown?</h1>
            <h3>{value}</h3>
            <button className="dropbtn" onMouseEnter={onMouseHover}>Select</button>
            <div className="dropdown-content" style={{ display: `${isActive ? 'block' : 'none'}` }}>
                {results}
            </div>
        </div>
    );
}

export default Dropdown;