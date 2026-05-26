import React from 'react';

export const LanArrowRightFromLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16zm475.3 187.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h313.4L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z"})
);

export default LanArrowRightFromLine;
