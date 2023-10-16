import { HiddenMenuHeader } from './HiddenMenuHeader';
import { OpenMenuButton } from './OpenMenuButton';
import { useState } from 'react';

export const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const handleSetNavbar = () => {
    setNavbar((value) => !value);
  };

  return (
    <nav className="uppercase">
      <div className="flex items-center justify-between py-3 md:block md:py-5">
        <OpenMenuButton navbar={navbar} onSetNavbar={handleSetNavbar} />
      </div>
      <HiddenMenuHeader navbar={navbar} />
    </nav>
  );
};
