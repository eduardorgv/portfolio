export const Contact = () => {
  return (
    <div id="contact" className="text-center">
      <h2 className="mb-8 text-center text-3xl md:text-4xl">Contact</h2>
      <h3 className="text-3xl md:text-4xl">
        <span className="font-extralight text-[#007AFF]">Eduardo</span>{' '}
        <span className="font-medium text-[#007AFF]">Rodríguez</span>
      </h3>
      <h3 className="text-2xl md:text-3xl">Front-end developer</h3>
      <p className="mt-2 text-base md:px-40 lg:px-60 xl:px-96">
        I am available for work. Connect with me via email or find me on
        LinkedIn and checkout my Github account.
      </p>
      <p className="mt-12 text-lg font-semibold">eduardsabb@outlook.com</p>
      <span className="text-lg font-light text-stone-600">Find me on</span>

      <div className="mt-4 flex items-center justify-center gap-8">
        <a
          href="https://www.linkedin.com/in/josé-eduardo-rodríguez-gallegos-79a195213"
          target="_blank"
        >
          <img
            className="h-12 drop-shadow-md"
            src="/LinkedIn.png"
            alt="LinkedIn Logo"
          />
        </a>
        <a href="https://github.com/eduardorgv" target="_blank">
          <img
            className="h-12 drop-shadow-md"
            src="/GitHub.png"
            alt="GitHub Logo"
          />
        </a>
      </div>
    </div>
  );
};
