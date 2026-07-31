import React from 'react';

export const LanPauseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 48c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM0 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm272-32c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-48 32c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48z"})
);

export default LanPauseThin;
