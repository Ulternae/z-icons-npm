import React from 'react';

export const LanBorderStyleAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 56c0-8.8-7.2-16-16-16s-16 7.2-16 16v360c0 17.7-14.3 32-32 32H24c-8.8 0-16 7.2-16 16s7.2 16 16 16h360c35.3 0 64-28.7 64-64zm-264 8a24 24 0 1 0-48 0 24 24 0 1 0 48 0m104-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48M56 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 296a24 24 0 1 0 0 48 24 24 0 1 0 0-48m24-104a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanBorderStyleAlt;
