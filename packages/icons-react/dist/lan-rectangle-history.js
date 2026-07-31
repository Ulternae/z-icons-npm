import React from 'react';

export const LanRectangleHistory = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 272c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v144c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32zm-32-64c35.3 0 64 28.7 64 64v144c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm0-104c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.8 0-16-7.2-16-16s7.2-16 16-16zM400 0c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
);

export default LanRectangleHistory;
