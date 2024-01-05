import { HeaderMenu } from './HeaderMenu';
import { useEffect } from 'react';

export const Header = () => {
  useEffect(() => {
    const handleClick = () => {
      document.getElementById('nav-content').classList.toggle('hidden');
    };

    document
      .getElementById('nav-toggle')
      .addEventListener('click', handleClick);

    return () => {
      document
        .getElementById('nav-toggle')
        .removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex w-full flex-wrap items-center justify-between bg-[#F5F5F7] p-3 uppercase shadow-sm">
      <div className="mr-6 flex flex-shrink-0 items-center">
        <a className="no-underline hover:no-underline" href="#">
          <img className="h-10" src="/logo.png" alt="" />
        </a>
      </div>

      <HeaderMenu />
    </nav>
  );
};
