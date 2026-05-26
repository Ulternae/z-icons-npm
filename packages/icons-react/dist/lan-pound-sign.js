import React from 'react';

export const LanPoundSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M171.3 32C78.9 32 17 126.7 54 211.3l13.6 31c2 4.5 3.7 9 5.1 13.7H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h62.2c1.1 24.8-5 49.7-18.1 71.5L2.3 455.8c-3 4.9-3 11.1-.2 16.1S10.2 480 16 480h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H44.3l43.2-72c16.1-26.9 23.8-57.5 22.7-88H256c8.8 0 16-7.2 16-16s-7.2-16-16-16H105.8c-2.2-9-5.2-17.9-8.9-26.5l-13.6-31C55.5 135.1 102 64 171.3 64h6.5c22.3 0 44.2 5.8 63.5 16.9l22.8 13c7.7 4.4 17.4 1.7 21.8-6s1.7-17.4-6-21.8l-22.8-13A159.8 159.8 0 0 0 177.8 32z"})
);

export default LanPoundSign;
