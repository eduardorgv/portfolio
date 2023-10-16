export const Home = () => {
  return (
    <div className="mt-32 flex flex-col items-center justify-center text-center">
      <h2 className="mb-1 text-sm font-semibold uppercase text-stone-400">
        Welcome to my portfolio
      </h2>
      <div className="text-5xl md:text-6xl">
        <h1>
          Hi, I'm{' '}
          <span className="font-extralight text-[#007AFF]">Eduardo</span>{' '}
          <span className="font-medium text-[#007AFF]">Rodríguez</span>
        </h1>
        <h1 className="text-4xl md:text-6xl">Front-end developer</h1>
      </div>
      <div className="mt-6 flex items-center justify-center gap-8">
        <img className="h-12" src="/LinkedIn.png" alt="LinkedIn Logo" />
        <img className="h-12" src="/GitHub.png" alt="GitHub Logo" />
      </div>
    </div>
  );
};
