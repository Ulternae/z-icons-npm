import React from 'react';

export const LanSquareRootRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M344.3 80c-3.6 0-6.7 2.4-7.7 5.8L231.1 462.5c-2.6 9.4-10.7 16.3-20.5 17.4s-19.1-3.9-23.8-12.5L83.9 276.2c-1.4-2.6-4.1-4.2-7-4.2H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h52.9c20.6 0 39.5 11.3 49.3 29.5l74.7 138.8L290.3 73c6.8-24.3 28.9-41 54-41H552c13.3 0 24 10.7 24 24s-10.7 24-24 24z"})
);

export default LanSquareRootRegular;
