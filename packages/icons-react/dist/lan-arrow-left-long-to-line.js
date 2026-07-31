import React from 'react';

export const LanArrowLeftLongToLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 112v288c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16s-16 7.2-16 16m132.7 132.7c-6.2 6.2-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L182.6 272H624c8.8 0 16-7.2 16-16s-7.2-16-16-16H182.6l116.7-116.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z"})
);

export default LanArrowLeftLongToLine;
