import React from 'react';

export const LanPentagon = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -12.25 576 524.25',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M297.6 22.8c-5.6-4.1-13.2-4.1-18.8 0L54.1 186.1c-5.6 4.1-8 11.3-5.8 17.9l85.8 264.1c2.1 6.6 8.3 11.1 15.2 11.1H427c6.9 0 13.1-4.5 15.2-11.1L528 203.9c2.1-6.6-.2-13.8-5.8-17.9zl18.8-25.9L541 160.2c16.8 12.2 23.9 33.9 17.4 53.7l-85.7 264c-6.4 19.8-24.9 33.2-45.7 33.2H149.3c-20.8 0-39.2-13.4-45.7-33.2L17.9 213.8c-6.4-19.8.6-41.4 17.4-53.7L260-3.1c16.8-12.2 39.6-12.2 56.4 0z"})
);

export default LanPentagon;
