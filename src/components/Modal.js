import ReactDOM from "react-dom";

function Modal({ onClose, children, actionBar }) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-800 opacity-80"
      ></div>
      <div className="absolute inset-20 p-10 bg-white rounded-xl">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
