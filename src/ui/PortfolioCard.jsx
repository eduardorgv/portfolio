import { ButtonSmall } from './ButtonSmall';

export const PortfolioCard = ({ card }) => {
  const { title, description, imageSrc, code, demo } = card;

  return (
    <div className="h-[390px] w-72 rounded-lg bg-white shadow-lg">
      <div className="flex items-center justify-center leading-none">
        <img
          src={imageSrc}
          alt="pic"
          className="mt-6 h-40 w-56 -translate-y-10 transform rounded-lg shadow-2xl transition duration-700 hover:-translate-y-4 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-1 block text-xl font-semibold">{title}</h3>
        <p className="text-base font-medium tracking-tighter text-gray-500">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-start gap-4 p-4">
        <ButtonSmall type="secondary" link={code}>
          <div className="flex items-center justify-center gap-1.5">
            <p>Code</p>
            <img src="/github-white.svg" alt="github icon" />
          </div>
        </ButtonSmall>
        <ButtonSmall type="primary" link={demo}>
          <div className="flex items-center justify-center gap-1.5">
            <p>Demo</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M212.309-140.001q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h222.306q12.769 0 21.384 8.616 8.615 8.615 8.615 21.384t-8.615 21.384Q447.384-760 434.615-760H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v535.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-222.306q0-12.769 8.615-21.384t21.384-8.615q12.769 0 21.384 8.615 8.616 8.615 8.616 21.384v222.306q0 30.308-21 51.308t-51.308 21H212.309ZM760-717.847 409.846-367.693q-8.308 8.308-20.884 8.5-12.577.192-21.269-8.5-8.692-8.692-8.692-21.076 0-12.385 8.692-21.077L717.847-760H589.999q-12.769 0-21.384-8.615T560-789.999q0-12.769 8.615-21.384 8.615-8.616 21.384-8.616h230v230q0 12.769-8.616 21.384Q802.768-560 789.999-560t-21.384-8.615Q760-577.23 760-589.999v-127.848Z" />
            </svg>
          </div>
        </ButtonSmall>
      </div>
    </div>
  );
};
