import React from 'react';

export const LanArrowRightToBracket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M347.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 240H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h281.4L180.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zM336 448c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c53 0 96-43 96-96V128c0-53-43-96-96-96h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64z"})
);

export default LanArrowRightToBracket;
