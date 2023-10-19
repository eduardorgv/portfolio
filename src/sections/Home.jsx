export const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="w-5/6">
        <h2 className="mb-1 text-lg font-semibold uppercase text-stone-400">
          Welcome to my portfolio
        </h2>
        <div className="text-6xl lg:text-8xl">
          <h1>
            Hi, I'm{' '}
            <span className="font-extralight text-[#007AFF]">Eduardo</span>{' '}
            <span className="font-medium text-[#007AFF]">Rodríguez</span>
          </h1>
          <h1 className="mt-3 text-4xl lg:text-6xl">Front-end developer</h1>
        </div>
        <div className="mt-6 flex items-center justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/josé-eduardo-rodríguez-gallegos-79a195213"
            target="_blank"
          >
            <img
              className="h-12 drop-shadow-md smoothEaseInOut"
              src="/LinkedIn.png"
              alt="LinkedIn Logo"
            />
          </a>
          <a href="https://github.com/eduardorgv" target="_blank">
            <img
              className="h-12 drop-shadow-md smoothEaseInOut"
              src="/GitHub.png"
              alt="GitHub Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
