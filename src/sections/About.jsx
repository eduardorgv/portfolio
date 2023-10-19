import { Button } from '../ui/Button';
import { Description } from '../ui/Description';
import { ProfileCard } from '../ui/ProfileCard';
import { TechStack } from '../ui/TechStack';

export const About = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/cv.pdf';
    downloadLink.download = 'cv.pdf';
    downloadLink.click();
  };

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-[#007bff10] py-20"
    >
      <div className="flex w-5/6 flex-col justify-center gap-6 lg:grid lg:grid-cols-3 lg:grid-rows-2">
        <div className="flex items-center justify-center lg:row-span-2 lg:justify-start">
          <ProfileCard />
        </div>
        <div className="space-y-6 lg:col-span-2 lg:row-span-2">
          <Description />
          <TechStack />
          <div className="mt-6 flex items-center justify-center lg:justify-start">
            <Button onClick={handleDownload}>Download my cv</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
