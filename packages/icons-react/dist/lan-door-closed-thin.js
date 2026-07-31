import React from 'react';

export const LanDoorClosedThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 16c26.5 0 48 21.5 48 48v432H48V64c0-26.5 21.5-48 48-48zm64 480V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v432H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-96-224a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0"})
);

export default LanDoorClosedThin;
