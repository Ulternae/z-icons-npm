import React from 'react';

export const LanHatWitchSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m80 400 89.7-217.8c14.5-35.3 39.3-65.5 71-86.6l132-88C380 2.7 388.6.1 397.5.1c11.8 0 23.2 4.7 31.6 13.1l64.2 64.2c12 12 18.7 28.3 18.7 45.3v49.7c0 10.9-8.9 19.8-19.8 19.8-7.5 0-14.3-4.2-17.7-10.9l-13.3-26.6c-8.1-16.2-24.6-26.4-42.8-26.4-20.6 0-38.8 13.2-45.4 32.7l-.3.9c-3.1 9.4-3.4 19.5-.6 29L432 400zM32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})
);

export default LanHatWitchSolid;
