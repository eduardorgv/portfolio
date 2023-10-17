import { HeaderMenu } from './HeaderMenu';
import { OpenMenuButton } from './OpenMenuButton';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const handleSetNavbar = () => {
    setNavbar((value) => !value);
  };

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
    // <nav className="sticky top-0 z-10 flex w-full items-center justify-center bg-[#F5F5F7] p-5 uppercase shadow-sm">
    //   <div className="max-w-custom flex w-5/6 justify-between">
    //     <a href="#">
    //       <img className="h-10" src="/React.png" alt="" />
    //     </a>
    //     <HeaderMenu />
    //   </div>
    // </nav>

    <nav className="fixed top-0 z-10 flex w-full flex-wrap items-center justify-between bg-[#F5F5F7] p-6 uppercase shadow-sm">
      <div className="mr-6 flex flex-shrink-0 items-center">
        <a className="no-underline hover:no-underline" href="#">
          <img className="h-10" src="/React.png" alt="" />
        </a>
      </div>

      <HeaderMenu />
    </nav>
  );
};
