import React from 'react';

export const LanRectangleVerticalHistoryRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h144c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h144c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H272c-35.3 0-64-28.7-64-64zm-104 8c0-13.3 10.7-24 24-24s24 10.7 24 24v368c0 13.3-10.7 24-24 24s-24-10.7-24-24zM0 120c0-13.3 10.7-24 24-24s24 10.7 24 24v272c0 13.3-10.7 24-24 24S0 405.3 0 392z"})
);

export default LanRectangleVerticalHistoryRegular;
