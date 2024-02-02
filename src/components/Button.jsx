export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="py-2 px-5 bg-stone-600 mt-5 align-text-top rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-700 ease-out duration-200 font-sans "
    >
      {children}
    </button>
  );
}
