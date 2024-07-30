import "../styles/Card.scss";

function Card({ children }) {
  return (
    <div className="card flex justify-center rounded-lg w-full p-6">
      <div
        className="
        grid grid-cols-1 
        gap-y-5 
        md:grid-cols-2"
      >
        {children}
      </div>
    </div>
  );
}

export default Card;
