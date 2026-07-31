import React from 'react';

export const LanArrowLeftFromDottedLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H54.6l116.7-116.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0zM488 64a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-24 136a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 88a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-24 136a24 24 0 1 0 48 0 24 24 0 1 0-48 0"})
);

export default LanArrowLeftFromDottedLine;
