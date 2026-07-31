import React from 'react';

export const LanRectangleVerticalHistory = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h144c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-64 32c0-35.3 28.7-64 64-64h144c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H272c-35.3 0-64-28.7-64-64zm-104 0c0-8.8 7.2-16 16-16s16 7.2 16 16v384c0 8.8-7.2 16-16 16s-16-7.2-16-16zM0 112c0-8.8 7.2-16 16-16s16 7.2 16 16v288c0 8.8-7.2 16-16 16s-16-7.2-16-16z"})
);

export default LanRectangleVerticalHistory;
