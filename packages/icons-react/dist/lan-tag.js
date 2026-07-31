import React from 'react';

export const LanTag = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64.1 96c0-17.7 14.3-32 32-32h156.1c8.5 0 16.6 3.4 22.6 9.4l192 192c12.5 12.5 12.5 32.8 0 45.2L310.7 466.7c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-6-6-9.4-14.1-9.4-22.6zm32-64c-35.3 0-64 28.7-64 64v156.1c0 17 6.7 33.2 18.7 45.3l192 192c25 25 65.5 25 90.5 0l156.2-156.1c25-25 25-65.5 0-90.5l-192-192c-12-12-28.3-18.7-45.3-18.7zm48 136a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanTag;
