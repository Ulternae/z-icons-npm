import React from 'react';

export const LanTrademarkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 104c0 4.4 3.6 8 8 8h112v296c0 4.4 3.6 8 8 8s8-3.6 8-8V112h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m302.5-4.7c-2-2.8-5.7-4-8.9-2.9s-5.5 4.1-5.5 7.6v304c0 4.4 3.6 8 8 8s8-3.6 8-8V128.5l137.5 188.2c1.5 2.1 3.9 3.3 6.5 3.3s5-1.2 6.5-3.3L592 128.5V408c0 4.4 3.6 8 8 8s8-3.6 8-8V104c0-3.5-2.2-6.5-5.5-7.6s-6.9.1-8.9 2.9L448 298.4z"})
);

export default LanTrademarkThin;
