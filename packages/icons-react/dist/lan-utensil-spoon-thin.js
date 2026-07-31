import React from 'react';

export const LanUtensilSpoonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m263.4 216.6 32 32c15.6 15.6 36 23.4 56.4 23.4 33.8 0 69.7-20.5 97.8-54.2 28-33.5 46.3-78 46.3-121.8 0-44.2-35.8-80-80-80-43.7 0-88.2 18.3-121.8 46.3-33.8 28.1-54.2 64.1-54.2 97.8 0 20.4 7.8 40.8 23.4 56.4zm-11.3 11.3c-18.7-18.7-28.1-43.2-28.1-67.7C224 80 320 0 416 0c53 0 96 43 96 96 0 96-80 192-160.2 192-24.5 0-49-9.4-67.7-28.1l-10.3-10.4L13.7 509.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l260.1-260.1-10.3-10.3z"})
);

export default LanUtensilSpoonThin;
