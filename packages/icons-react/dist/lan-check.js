import React from 'react';

export const LanCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M441.4 67.1c7.1 5.2 8.7 15.2 3.5 22.4l-280 384c-2.8 3.8-7 6.2-11.7 6.5s-9.2-1.3-12.6-4.6l-136-136c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L150 439.6 419 70.7c5.2-7.1 15.2-8.7 22.4-3.5z"})
);

export default LanCheck;
