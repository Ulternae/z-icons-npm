import React from 'react';

export const LanDoorOpenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 48h160c8.8 0 16 7.2 16 16v400H80V64c0-8.8 7.2-16 16-16M80 512h216c13.3 0 24-10.7 24-24V64c0-5.5-.7-10.9-2-16h34c8.8 0 16 7.2 16 16v424c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V64c0-35.3-28.7-64-64-64h-88v.5c-2.6-.3-5.3-.5-8-.5H96C60.7 0 32 28.7 32 64v400h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24zm96-256a32 32 0 1 0 64 0 32 32 0 1 0-64 0"})
);

export default LanDoorOpenRegular;
