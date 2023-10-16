import { services } from '../data/services';
import { ServiceCard } from '../ui/ServiceCard';

export const Services = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-center text-3xl md:text-4xl">Services</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            src={service.src}
            type={service.gradientType}
          />
        ))}
      </div>
    </div>
  );
};
