import { createPortal } from "react-dom";
import { useImperativeHandle, useRef, forwardRef } from "react";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className=" w-64 p-4 m-auto shadow-lg rounded-2xl dark:bg-stone-700 backdrop:bg-stone-900/70 text-center"
      ref={dialog}
    >
      {children}
      <form method="dialog">
        <button className="py-2 px-4  bg-red-800 hover:bg-red-900 focus:ring-red-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  opacity-70 rounded-lg">
          {btnCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
