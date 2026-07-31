import React from 'react';

export const LanArrowsLeftRightToLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 112v288c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16m544 0v288c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16M475.3 267.3l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7H150.7l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-80-80c-3-3-4.7-7.1-4.7-11.3s1.7-8.3 4.7-11.3l80-80c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L150.7 240h274.7l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6"})
);

export default LanArrowsLeftRightToLine;
