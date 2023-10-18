import { Button } from './Button';
import { teckStack } from '../data/services';
import { TeckStackItem } from './TeckStackItem';

export const TechStack = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-600">TeckStack:</h3>
      <div className="flex flex-wrap gap-4">
        {teckStack.map((item) => (
          <TeckStackItem key={item.title} title={item.title} src={item.src} />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-start">
        <Button>Download my cv</Button>
      </div>
    </div>
  );
};
