import React from 'react';

export const LanCode = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M383.2 21.1c2.8-8.4-1.7-17.4-10.1-20.2S355.7 2.6 352.9 11l-160 480c-2.8 8.4 1.7 17.4 10.1 20.2s17.4-1.7 20.2-10.1zM139.3 132.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L38.6 256l100.7-100.7c6.2-6.2 6.2-16.4 0-22.6m297.4 0c-6.2 6.2-6.2 16.4 0 22.6L537.4 256 436.7 356.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0"})
);

export default LanCode;
