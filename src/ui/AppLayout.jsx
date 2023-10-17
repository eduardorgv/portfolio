import { AboutMe } from '../sections/AboutMe';
import { Contact } from '../sections/Contact';
import { Home } from '../sections/Home';
import { Portfolio } from '../sections/Portfolio';
import { Services } from '../sections/Services';
import { Header } from './Header';

export const AppLayout = () => {
  return (
    <div className="space-y-[8rem]">
      <Header />
      <div className="container mx-auto space-y-[8rem] px-5 pb-20">
        <Home />
        <AboutMe />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};
