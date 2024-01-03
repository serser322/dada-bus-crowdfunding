import ReactModal from "react-modal";
import CloseRound from "@ricons/material/CloseRound";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    paddingLeft: "30px",
  },
};

function Modal({ isOpen, title, closeModal, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      closeTimeoutMS={300}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          className="w-8 hover:text-amber-300 active:text-amber-500"
          onClick={() => closeModal()}
        >
          <CloseRound />
        </button>
      </div>
      <div className="tracking-widest leading-10 pt-8">
        <div>{children}</div>
      </div>
    </ReactModal>
  );
}

export default Modal;
