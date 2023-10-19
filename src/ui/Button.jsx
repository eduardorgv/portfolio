export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="rounded-md bg-[#007AFF] px-3 py-2 text-sm lg:text-base font-semibold uppercase text-white shadow-lg transition duration-300 hover:bg-[#005eff]">
      {children}
    </button>
  );
};
