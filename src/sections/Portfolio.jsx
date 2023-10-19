import { portfolioCard } from '../data/portfolioData';
import { PortfolioCard } from '../ui/PortfolioCard';

export const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex min-h-screen items-center justify-center py-40"
    >
      <div className="w-5/6">
        <h2 className="mb-20 text-center text-3xl font-bold lg:text-4xl">
          Portfolio
        </h2>
        <div className="flex flex-wrap place-items-center justify-center gap-12">
          {portfolioCard.map((card) => (
            <PortfolioCard
              key={card.title}
              card={card}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
