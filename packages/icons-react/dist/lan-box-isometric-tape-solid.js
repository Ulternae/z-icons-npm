import React from 'react';

export const LanBoxIsometricTapeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -6.425 512 523.075',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m463.4 409.4-176 99c-19.5 11-43.3 11-62.8 0l-176-99C28.5 398 16 376.7 16 353.6V157.3c0-23 12.4-44.3 32.4-55.7l57-32.3 230.2 129.5c10.1 5.7 16.3 16.3 16.3 27.9v78.9c0 12.2 13.2 19.9 23.8 13.9l39.8-22.4c10.1-5.7 16.3-16.3 16.3-27.9v-90.6c0-11.6-6.2-22.2-16.3-27.9L187.8 22.6l36.6-20.7C244-9.2 268-9.2 287.5 1.9l176 99.7c20.1 11.4 32.5 32.6 32.5 55.7v196.3c0 23.1-12.5 44.4-32.6 55.8"})
);

export default LanBoxIsometricTapeSolid;
