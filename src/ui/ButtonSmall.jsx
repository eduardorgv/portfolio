export const ButtonSmall = ({ children, type, link }) => {
  const buttonTypes = {
    primary:
      'rounded-md bg-[#007AFF] px-4 py-1.5 text-sm font-semibold uppercase text-white shadow-lg transition duration-300 hover:bg-[#005eff]',
    secondary:
      'rounded-md text-white bg-slate-600 px-4 py-1.5 text-sm font-semibold uppercase shadow-lg transition duration-300 hover:bg-slate-700',
  };

  const handleOnClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button className={buttonTypes[type]} onClick={handleOnClick}>
      {children}
    </button>
  );
};
