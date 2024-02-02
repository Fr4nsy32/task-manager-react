import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd, onDelete}) {
  const [enteredTask, setEnteredTask] = useState('');
  const modal = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === ''){
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
    <Modal ref={modal} btnCaption="Close">
    <h2 className="text-xl text-stone-400 font-black font-Playpen mb-3">
      Invalid Input.
    </h2>
    <p className="text-stone-300 mb-3 drop-shadow-sm">
      Please provide a valid value
    </p>
  </Modal>
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
    </>
  );
}
