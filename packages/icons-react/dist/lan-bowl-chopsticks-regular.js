import React from 'react';

export const LanBowlChopsticksRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M18.5 125.1c-9.7 1.5-18.5-6-18.5-15.8 0-7.7 5.5-14.3 13.1-15.7L484.4 5.2c14.3-2.7 27.6 8.3 27.6 22.9 0 11.5-8.4 21.2-19.7 23zM0 159.7c0-8.8 7-16 15.7-16.2l471.9-14.7c13.3-.4 24.4 10.3 24.4 23.6 0 13-10.6 23.6-23.6 23.6H16.2C7.3 176 0 168.7 0 159.7m151.5 272.8c11.5 5.2 20.4 14.7 25 26.4 1.2 3.1 4.2 5.1 7.5 5.1h144c3.3 0 6.3-2 7.5-5.1 4.5-11.7 13.5-21.2 25-26.4C421.6 404.8 464 343.3 464 272H48c0 71.3 42.4 132.8 103.5 160.5M0 272c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48 0 90.8-54.1 169-131.7 204.2-8.1 21-28.4 35.8-52.3 35.8H184c-23.8 0-44.2-14.9-52.3-35.8C54.1 441 0 362.8 0 272"})
);

export default LanBowlChopsticksRegular;
