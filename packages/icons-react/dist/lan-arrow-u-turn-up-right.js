import React from 'react';

export const LanArrowUTurnUpRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.95 512 527.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 128c0-4.2-1.7-8.3-4.7-11.3l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 112H184C82.4 112 0 194.4 0 296s82.4 184 184 184h248l3.2-.3c7.3-1.5 12.8-8 12.8-15.7s-5.5-14.2-12.8-15.7l-3.2-.3H184c-83.9 0-152-68.1-152-152s68.1-152 152-152h273.4L356.7 244.7l-2.1 2.5c-4.1 6.2-3.4 14.7 2.1 20.1s13.9 6.2 20.1 2.1l2.5-2.1 128-128c3-3 4.7-7.1 4.7-11.3"})
);

export default LanArrowUTurnUpRight;
