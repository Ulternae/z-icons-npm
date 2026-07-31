import React from 'react';

export const LanArrowRightFromBracket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H96C43 32 0 75 0 128v256c0 53 43 96 96 96h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zm331.3 203.3c6.2-6.2 6.2-16.4 0-22.6l-144-144c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h281.4L340.7 388.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z"})
);

export default LanArrowRightFromBracket;
