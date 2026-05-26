import React from 'react';

export const LanArrowDownFromArcRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48c114.9 0 208 93.1 208 208 0 13.3 10.7 24 24 24s24-10.7 24-24C512 114.6 397.4 0 256 0S0 114.6 0 256c0 13.3 10.7 24 24 24s24-10.7 24-24c0-114.9 93.1-208 208-208m121.6 344.3c9-9.7 8.5-24.9-1.3-33.9s-24.9-8.5-33.9 1.3L280 426.9V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v242.9l-62.4-67.2c-9-9.7-24.2-10.3-33.9-1.3s-10.3 24.2-1.3 33.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7s13-2.8 17.6-7.7z"})
);

export default LanArrowDownFromArcRegular;
