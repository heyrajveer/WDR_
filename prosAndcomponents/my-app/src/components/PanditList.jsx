import PanditCard from "./PanditCard";

function PanditList() {

const pandits = [
  {name: "Pandit Sharma", city: "Delhi", price: 1500},
  {name: "Pandit Mishra", city: "Varanasi", price: 2000},
];

return (
  <div>
    {pandits.map((pandit, index) => (
      < PanditCard
        key={index}
        name={pandit.name}
        city={pandit.city}
        price={pandit.price}
      />
    ))}
  </div>
);
}

export default PanditList;