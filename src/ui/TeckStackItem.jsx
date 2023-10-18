export const TeckStackItem = ({ src, title }) => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-1">
      <img className="h-12 w-12 select-none drop-shadow-sm" src={src} alt={`${title}'s logo`} />
      <p className="text-center font-semibold">{title}</p>
    </div>
  );
};
