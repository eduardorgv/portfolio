import { Description } from '../ui/Description';
import { ProfileCard } from '../ui/ProfileCard';

export const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="flex items-center justify-center md:col-start-1 md:col-end-2">
        <ProfileCard />
      </div>
      <div className="flex items-center justify-start md:col-start-2 md:col-end-4">
        <Description />
      </div>
    </div>
  );
};
