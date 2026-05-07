const CarCard = ({ name, model, color, price, image }) => {
    return (
        <div className="card">
            <img
                src={image}
                alt={name}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <h2>{name}</h2>
            <p><strong>Model:</strong> {model}</p>
            <p><strong>Color:</strong> {color}</p>
            <p><strong>Price:</strong> {price}</p>
        </div>
    );
};

export default CarCard;