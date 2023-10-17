import { AboutMe } from '../sections/AboutMe';
import { Contact } from '../sections/Contact';
import { Home } from '../sections/Home';
import { Portfolio } from '../sections/Portfolio';
import { Services } from '../sections/Services';
import { Header } from './Header';

export const AppLayout = () => {
  return (
    <main>
      <Header />
      <section className="container mx-auto mt-0 px-5 pb-20">
        <Home />
        <AboutMe />
        <Services />
        <Portfolio />
        <Contact />
      </section>
    </main>
  );
};
