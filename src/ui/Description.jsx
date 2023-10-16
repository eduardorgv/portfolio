import { Button } from './Button';

export const Description = () => {
  return (
    <div className="space-y-4 text-justify">
      <h2 className="text-center text-3xl md:text-start md:text-4xl">
        About me
      </h2>
      <div className="text-md space-y-2 md:text-lg">
        <p>
          I am a Software Engineer graduated from the Morelia Technological
          Institute. Passionate front-end developer with 2+ years of experience,
          specialized in creating intuitive and attractive user interfaces.{' '}
        </p>
        <p>
          I have a strong command of HTML, CSS and JavaScript, as well as
          experience using modern frameworks such as React, Angular and Vue with
          outstanding skills in designing and implementing innovative technical
          solutions, as well as a solid understanding of development agile
          principles and teamwork methodologies.
        </p>
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <Button>Download my cv</Button>
      </div>
    </div>
  );
};
