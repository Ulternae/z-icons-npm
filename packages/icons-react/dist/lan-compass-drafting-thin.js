import React from 'react';

export const LanCompassDraftingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-22.6 68.5c-12.1 7.3-26.3 11.5-41.4 11.5s-29.3-4.2-41.3-11.5l-88.9 160c37.4 22.6 81.2 35.5 128 35.5 91.8 0 171.9-49.9 214.8-124 2.2-3.8 7.1-5.1 10.9-2.9s5.1 7.1 2.9 10.9c-45.6 78.9-131 132-228.7 132-49.6 0-96.1-13.7-135.8-37.5L15 507.9c-2.1 3.9-7 5.3-10.9 3.1s-5.3-7-3.1-10.9l103.5-186.3c-32.4-22.3-59.7-51.6-79.4-85.8-2.2-3.8-.9-8.7 2.9-10.9s8.7-.9 10.9 2.9c18.3 31.7 43.5 58.9 73.4 79.8L201 140.2l.7-1.3C185.9 124.2 176 103.2 176 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 23.2-9.9 44.2-25.7 58.8l.7 1.3 63.9 115c-4.3 3.2-8.7 6.3-13.2 9.2zM497 507.9l-80.8-145.5q6.9-4.2 13.5-8.7L511 500.1c2.1 3.9.8 8.7-3.1 10.9s-8.7.8-10.9-3.1"})
);

export default LanCompassDraftingThin;
