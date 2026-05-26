import React from 'react';

export const LanOctagonPlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M143.4 18.8c12-12 28.3-18.7 45.3-18.7h135.6c17 0 33.3 6.7 45.3 18.7l124 124.2c12 12 18.7 28.3 18.7 45.3v135.6c0 17-6.7 33.3-18.7 45.3l-124.1 124c-12 12-28.3 18.7-45.3 18.7H188.6c-17 0-33.3-6.7-45.3-18.7L19.2 369C7.2 357 .5 340.8.5 323.8V188.2c0-17 6.7-33.3 18.7-45.3zm89 325.2c0 13.3 10.7 24 24 24s24-10.7 24-24v-64h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v64h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64z"})
);

export default LanOctagonPlusSolid;
