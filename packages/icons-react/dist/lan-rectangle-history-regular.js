import React from 'react';

export const LanRectangleHistoryRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 272c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v144c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16zm-16-64c35.3 0 64 28.7 64 64v144c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm-8-104c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24s10.7-24 24-24zM392 0c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanRectangleHistoryRegular;
