function Brand() {
    return (
        <div
            className="nav-brand flex-row"
            style={{
                font: "x-large Barlow, sans-serif",
                fontWeight: "bolder",
            }}>
            <img
                className="nav-logo"
                src="./src/assets/logo.png"
                alt=""
                width="65px"
            />
            <p className="gradient-text">MYSTOM</p>
        </div>
    );
}

export default Brand;
