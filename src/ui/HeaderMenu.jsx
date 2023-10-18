import { headerData } from '../data/headerData';

export const HeaderMenu = () => {
  return (
    <>
      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center rounded px-3 py-2 outline-none"
        >
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className="hidden w-full flex-grow pt-6 lg:flex lg:w-auto lg:items-center lg:pt-0"
        id="nav-content"
      >
        <ul className="list-reset flex flex-col items-center justify-center font-semibold uppercase lg:flex-1 lg:flex-row lg:justify-end">
          {headerData.map((item) => (
            <li key={item.title} className="mr-3">
              <a
                className="hover:text-underline inline-block px-4 py-2 no-underline transition duration-300 hover:text-[#007AFF]"
                href={item.href}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
