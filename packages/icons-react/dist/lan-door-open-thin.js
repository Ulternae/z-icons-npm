import React from 'react';

export const LanDoorOpenThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 16h160c26.5 0 48 21.5 48 48v432H48V64c0-26.5 21.5-48 48-48m202.3 0H352c26.5 0 48 21.5 48 48v440c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v432H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h312V64c0-19.1-8.4-36.3-21.7-48M240 256a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanDoorOpenThin;
