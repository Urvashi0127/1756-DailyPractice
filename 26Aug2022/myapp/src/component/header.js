import './header.css';
const Header= ({title}) => {
    return (
        <header>
            <h1 style={headStyle}>Hello {title}</h1>
            {/* <h1 className="h2head">H2 HEADING</h1>
            <h1 id ="h3head">H3 heading</h1> */}

            <button className="btn">Click</button>
        </header>
    );
};

const headStyle = {
    color: "blue",
    backgroundColor: "lightblue",
    textAlign:"center",
}

Header.defaultProps = {
    title: "Task tracker",
}

export default Header;