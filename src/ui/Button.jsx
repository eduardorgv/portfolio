export const Button = ({ children }) => {
  return (
    <button className="rounded-md bg-[#007AFF] px-3 py-2 text-base uppercase text-white shadow-lg transition duration-300 hover:bg-[#005eff]">
      {children}
    </button>
  );
};
