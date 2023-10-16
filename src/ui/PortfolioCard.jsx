const setGradientType = (type) => {
  switch (type) {
    case 'react':
      return 'react-linear-gradient';
    case 'angular':
      return 'angular-linear-gradient';
    case 'vue':
      return 'vue-linear-gradient';
  }
};

export const PortfolioCard = ({ title, src, type }) => {
  const gradientType = setGradientType(type);

  return (
    <div
      className={`${gradientType} smoothEaseInOut grid h-40 grid-cols-2 rounded-xl px-4 shadow-lg`}
    >
      <div className="flex items-center justify-center">
        <h3 className="text-2xl font-medium drop-shadow-lg">{title}</h3>
      </div>
      <div className="flex items-center justify-end">
        <img
          className="h-auto max-h-28 w-auto drop-shadow-lg"
          src={src}
          alt={`${title}'s logo`}
        />
      </div>
    </div>
  );
};
