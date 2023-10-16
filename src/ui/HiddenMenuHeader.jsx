import React from 'react';

export const HiddenMenuHeader = ({ navbar }) => {
  return (
    <div
      className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
        navbar ? 'block' : 'hidden'
      }`}
    >
      <ul className="items-center justify-center gap-3 space-y-8 md:flex md:space-x-6 md:space-y-0">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
