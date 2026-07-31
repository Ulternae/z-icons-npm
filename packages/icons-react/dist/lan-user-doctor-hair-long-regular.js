import React from 'react';

export const LanUserDoctorHairLongRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 128c0-20.2-7.5-38.6-19.8-52.7l-33.1 28.9c-17.5 15.3-40 23.8-63.2 23.8H144v16c0 44.2 35.8 80 80 80s80-35.8 80-80zm-208 0c0-38.9 17.4-73.8 44.8-97.3 3.6-3.8 7.9-7.1 12.6-9.5C173.6 7.8 197.9 0 224 0c70.7 0 128 57.3 128 128v24.2c0 25.5 10.1 49.9 28.1 67.9l13.3 13.3c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6H70.6C58.1 272 48 261.9 48 249.4c0-6 2.4-11.8 6.6-16l13.3-13.3c18-18 28.1-42.4 28.1-67.9zm72 294.4c14.3 8.3 24 23.8 24 41.6 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6V378c-42.4 18.5-72 60.8-72 110 0 13.3-10.7 24-24 24S0 501.3 0 488c0-92.8 75.2-168 168-168h112c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-55.2-37.3-101.7-88-115.7V409c21.2 9.3 36 30.4 36 55v24c0 11-9 20-20 20s-20-9-20-20v-24c0-11-9-20-20-20s-20 9-20 20v24c0 11-9 20-20 20s-20-9-20-20v-24c0-24.6 14.8-45.7 36-55v-41h-96z"})
);

export default LanUserDoctorHairLongRegular;
