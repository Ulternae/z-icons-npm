import React from 'react';

export const LanArrowUpLong = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 320 575.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M171.3-27.3c-6.2-6.2-16.4-6.2-22.6 0l-144 144c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 22.6V528c0 8.8 7.2 16 16 16s16-7.2 16-16V22.6l116.7 116.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"})
);

export default LanArrowUpLong;
