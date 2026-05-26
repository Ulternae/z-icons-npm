import React from 'react';

export const LanCircleHryvniaRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16.8-393.3-75.8 9.5c-13.2 1.6-22.5 13.6-20.8 26.8s13.6 22.5 26.8 20.8l75.8-9.5c13.4-1.7 25.3 8.8 25.3 22.3 0 8-4.2 15.3-11 19.3h-133c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-2.7c1.8-6.2 2.7-12.7 2.7-19.3 0-42.4-37.2-75.2-79.2-69.9zm3.8 153.3H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h2.8c-1.8 6.3-2.8 12.9-2.8 19.6 0 42.3 36.7 75.1 78.7 70.5l91.9-10.2c13.2-1.5 22.7-13.3 21.2-26.5s-13.3-22.7-26.5-21.2l-91.9 10.2c-13.6 1.5-25.4-9.1-25.4-22.8 0-8 4.2-15.5 11.1-19.6H352c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanCircleHryvniaRegular;
