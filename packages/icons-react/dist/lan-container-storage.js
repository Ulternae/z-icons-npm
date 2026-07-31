import React from 'react';

export const LanContainerStorage = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 48c0-8.8 7.2-16 16-16h544c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v384h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V64H16C7.2 64 0 56.8 0 48m64 16v384h448V64zm64 80c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16zm208-16c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16m80 16c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16zm-176-16c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16"})
);

export default LanContainerStorage;
