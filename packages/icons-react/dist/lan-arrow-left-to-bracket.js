import React from 'react';

export const LanArrowLeftToBracket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M164.7 267.3c-3-3-4.7-7.1-4.7-11.3s1.7-8.3 4.7-11.3l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L214.6 240H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H214.6l116.7 116.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zM176 448c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64z"})
);

export default LanArrowLeftToBracket;
