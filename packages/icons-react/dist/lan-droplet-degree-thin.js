import React from 'react';

export const LanDropletDegreeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 496c-97.2 0-176-78.8-176-176 0-19.6 7.1-45.8 19.7-75.9 12.4-29.8 29.4-62.1 47.8-93.4 36.7-62.6 78-120.1 96-144.6 2.8-3.8 7.2-6 12.3-6h.4c5.1 0 9.5 2.3 12.3 6 18.1 24.5 59.4 82.1 96 144.6 18.4 31.3 35.4 63.6 47.8 93.4 12.5 30.2 19.7 56.3 19.7 75.9 0 97.2-78.8 176-176 176M64 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-274.1-166.6-323.5-5.9-8-15.2-12.5-25.2-12.5h-.4c-10 0-19.3 4.5-25.2 12.5C194.2 45.9 64 228.8 64 320M432 80a64 64 0 1 1 128 0 64 64 0 1 1-128 0m144 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
);

export default LanDropletDegreeThin;
