import { AboutMe } from '../sections/AboutMe';
import { Home } from '../sections/Home';
import { Services } from '../sections/Services';
import { Header } from './Header';

export const AppLayout = () => {
  return (
    <div className="mx-4 mb-20 space-y-[8rem] sm:mx-10 md:mx-20 lg:mx-40">
      <Header />
      <Home />
      <AboutMe />
      <Services />
    </div>
  );
};
