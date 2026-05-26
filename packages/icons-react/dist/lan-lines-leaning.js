import React from 'react';

export const LanLinesLeaning = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M190.9 53.7c3.2-8.2-.9-17.5-9.2-20.7s-17.5.9-20.7 9.2L1 458.2c-3.2 8.2.9 17.5 9.2 20.7s17.5-.9 20.7-9.2zm84.7-21.3c-8.6-2-17.2 3.4-19.2 12l-96 416c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l96-416c2-8.6-3.4-17.2-12-19.2M368 32c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16"})
);

export default LanLinesLeaning;
