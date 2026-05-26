import React from 'react';

export const LanSpinnerThirdRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M457 372c11.5 6.6 26.3 2.7 31.8-9.3C503.7 330.2 512 294.1 512 256 512 122.7 410.1 13.2 280 1.1c-13.2-1.2-24 9.6-24 22.9s10.8 23.9 24 25.4C383.6 61.3 464 149.3 464 256c0 29.3-6.1 57.3-17 82.6-5.3 12.2-1.5 26.8 10 33.5z"})
);

export default LanSpinnerThirdRegular;
