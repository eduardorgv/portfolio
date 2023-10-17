import React from 'react';

export const HorizontalPortfolioCard = ({ title, description, src, href }) => {
  return (
    <a href={href} target="_blank">
      <div className="smoothEaseInOut grid h-[300px] grid-cols-2 rounded-lg bg-white shadow-lg md:h-[210px]">
        <div className="p-4">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex items-center justify-center overflow-hidden">
          <img
            className="p-2 drop-shadow-lg"
            src={src}
            alt={`${title}'s demo`}
          />
        </div>
      </div>
    </a>
  );
};
