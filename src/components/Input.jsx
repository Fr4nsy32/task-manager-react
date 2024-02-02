import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextArea, label, ...props }, ref) {
  const classes =
    "bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 w-full p-1 border-b-2 rounded-sm border-stone-300";
  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase">{label}</label>
        {isTextArea ? (
          <textarea ref={ref} className={classes} {...props}></textarea>
        ) : (
          <input ref={ref} className={classes} {...props}></input>
        )}
      </p>
    </>
  );
});

export default Input;
