import React from 'react';

export const LanShuttleSpaceVertical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -28 448 572',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416.1 330.8 320 170.7V144c0-64.7-27.4-123.5-76.3-164.8-11.4-9.6-28-9.6-39.4 0C155.4 20.5 128 79.3 128 144v26.7L31.9 330.8C11 365.6 0 405.4 0 446v50c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-50c0-40.6-11-80.4-31.9-115.2M208 512h-80v-80c0-15.3 7.1-28.9 18.3-37.7 7.3-5.8 13.7-15.2 13.7-27V144c0-54.9 22.9-104.4 64-139.5 41.1 35.1 64 84.6 64 139.5v223.3c0 11.8 6.4 21.2 13.7 27 11.2 8.8 18.3 22.4 18.3 37.7v80h-80V400c0-8.8-7.2-16-16-16s-16 7.2-16 16zm113.5-142.8c-.7-.6-1.2-1.2-1.4-1.5-.1-.2-.1-.3-.1-.3V233l68.6 114.4c12.7 21.2 21.2 44.5 25 68.7h-63.2c-3.8-18.9-14.3-35.3-28.9-46.8zM352 512v-64h64v48c0 8.8-7.2 16-16 16zM126.5 369.2c-14.5 11.5-25 27.9-28.9 46.8H34.4c3.8-24.2 12.3-47.6 25-68.7L128 232.9v134.4s0 .2-.1.3c-.2.4-.7 1-1.4 1.5zM96 448v64H48c-8.8 0-16-7.2-16-16v-48zm96-336c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"})
);

export default LanShuttleSpaceVertical;
