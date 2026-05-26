import React from 'react';

export const LanClockSevenThirtyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 256a208 208 0 1 0 416 0 208 208 0 1 0-416 0m464 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M232 392v-56.7l-20 30c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l64-96c5.9-8.8 16.8-12.7 26.9-9.7s17 12.4 17 23v136c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})
);

export default LanClockSevenThirtyRegular;
