import { Description } from '../ui/Description';
import { ProfileCard } from '../ui/ProfileCard';
import { TechStack } from '../ui/TechStack';

export const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-[#007bff10] py-20"
    >
      <div className="grid w-5/6 grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2">
        <aside className="flex items-center justify-center md:row-span-2 md:justify-start">
          <ProfileCard />
        </aside>
        <div className="md:col-span-2">
          <Description />
        </div>
        <div className="md:col-span-2 md:col-start-2 md:row-start-2">
          <TechStack />
        </div>
      </div>
    </section>
  );
};
