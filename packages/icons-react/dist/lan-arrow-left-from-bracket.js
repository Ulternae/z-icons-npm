import React from 'react';

export const LanArrowLeftFromBracket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M336 64c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c53 0 96 43 96 96v256c0 53-43 96-96 96h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM4.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 240H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H54.6l116.7 116.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0z"})
);

export default LanArrowLeftFromBracket;
