import React from 'react';

export const LanArrowDownLong = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M148.7 539.3c6.2 6.2 16.4 6.2 22.6 0l144-144c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L176 489.4V-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v505.4L27.3 372.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z"})
);

export default LanArrowDownLong;
