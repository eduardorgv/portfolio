import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { Header } from './Header';
import { Home } from '../sections/Home';
import { Portfolio } from '../sections/Portfolio';

export const AppLayout = () => {
  return (
    <main>
      <Header />
      <section className="">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </section>
    </main>
  );
};
