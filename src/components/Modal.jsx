import ReactModal from "react-modal";
import CloseRound from "@ricons/material/CloseRound";

const customStyles = {
  content: {
    width: "400px",
    height: "400px",
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

function Modal({ isOpen, title, closeModal }) {
  return (
    <ReactModal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="w-8" onClick={() => closeModal()}>
          <CloseRound />
        </button>
      </div>

      <div className="pt-4">I am a modal</div>
    </ReactModal>
  );
}

export default Modal;
