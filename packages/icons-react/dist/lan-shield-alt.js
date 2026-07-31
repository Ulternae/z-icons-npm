import React from 'react';

export const LanShieldAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 38.8v433.8C86.8 397.1 48.5 233.2 48 139.8c0-12.1 7.5-22.8 18.8-27.5zm32 433.8V38.7l173.2 73.5c11.3 4.8 18.9 15.5 18.8 27.6-.5 93.3-38.8 257.3-192 332.8m9-464.8c-16-6.8-34-6.8-50 0l-176.7 75c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.8 420.7 495.6 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2l-176.6-75z"})
);

export default LanShieldAlt;
