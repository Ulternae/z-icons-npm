import React from 'react';

export const LanCornerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 168c0-4.4 3.6-8 8-8h440c35.3 0 64 28.7 64 64v152c0 4.4-3.6 8-8 8s-8-3.6-8-8V224c0-26.5-21.5-48-48-48H8c-4.4 0-8-3.6-8-8"})
);

export default LanCornerThin;
