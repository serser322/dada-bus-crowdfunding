import "../styles/Button.scss";

function Button({ text, icon: Icon, onClick }) {
  return (
    <button
      className="page-button flex justify-center items-center text-white text-sm md:text-base p-2"
      onClick={onClick}
    >
      <span className="w-4 mr-3 sm:w-5 pt-px">
        <Icon />
      </span>
      <span className="tracking-[0.2rem]">{text}</span>
    </button>
  );
}

export default Button;
