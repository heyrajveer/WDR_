
import './PanditCart.css'

function PanditCard(props) {
    //props destructuring 
  const  {name,city,price}=props;
  return (
    <div className="pandit-card">
        <h2 className="pandit-name">{name}</h2>
        <p className="pandit-city">City: {city}</p>
        <p className="pandit-price">Price: ₹{price}</p>
        <button className="book-btn">Book Pandit</button>
    </div>
  )
}

export default PanditCard