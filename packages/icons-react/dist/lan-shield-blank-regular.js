import React from 'react';

export const LanShieldBlankRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 49.4 73.1 127c-5.9 2.5-9.1 7.8-9 12.8.5 91.4 38.4 249.3 186.4 320.1 3.6 1.7 7.8 1.7 11.3 0 148-70.8 185.9-228.7 186.3-320.1 0-5-3.1-10.2-9-12.8zm13.4-46.5 188.4 79.9c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16.1 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0s9.2 1 13.4 2.9"})
);

export default LanShieldBlankRegular;
