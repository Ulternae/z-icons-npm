import React from 'react';

export const MinaMicrophoneSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 18v3m-4 0h8m-8-9.429V6.43C8 4.535 9.79 3 12 3c1.309 0 2.47.539 3.2 1.371M5 11c0 1.046.23 2.039.641 2.93M19 11a7 7 0 0 1-11.425 5.425M3 21l4.575-4.575M21 3l-5 5m0 0v3.571C16 13.465 14.21 15 12 15a4.44 4.44 0 0 1-2.348-.652M16 8l-6.348 6.348m0 0-2.077 2.077"})
);

export default MinaMicrophoneSlash;
