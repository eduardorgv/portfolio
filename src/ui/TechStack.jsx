import { teckStack } from '../data/services';
import { TeckStackItem } from './TeckStackItem';

export const TechStack = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-600">TechStack:</h3>
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        {teckStack.map((item) => (
          <TeckStackItem key={item.title} title={item.title} src={item.src} />
        ))}
      </div>
    </div>
  );
};
