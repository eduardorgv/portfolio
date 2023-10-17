import { HorizontalPortfolioCard } from '../ui/HorizontalPortfolioCard';
import { horizontalPortfolioCardData } from '../data/horizontalPortfolioCard';
import { VerticalPortfolioCard } from '../ui/VerticalPortfolioCard';
import { verticalPortfolioCardData } from '../data/verticalPortfolioCard';

export const Portfolio = () => {
  return (
    <div id='portfolio'>
      <h2 className="mb-8 text-center text-3xl md:text-4xl">Portfolio</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {verticalPortfolioCardData.map((item) => (
            <VerticalPortfolioCard
              key={item.title}
              title={item.title}
              description={item.description}
              src={item.src}
              href={item.href}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8">
          {horizontalPortfolioCardData.map((item) => (
            <HorizontalPortfolioCard
              key={item.title}
              title={item.title}
              description={item.description}
              src={item.src}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
