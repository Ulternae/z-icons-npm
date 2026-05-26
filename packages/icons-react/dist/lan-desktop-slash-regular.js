import React from 'react';

export const LanDesktopSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L481.8 416c34.5-1 62.2-29.2 62.2-64V96c0-35.3-28.7-64-64-64H97.8zM145.8 80H480c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16h-46.2zm152.4 288H96c-8.8 0-16-7.2-16-16V149.8l-48-48V352c0 35.3 28.7 64 64 64h115.7l-8 48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c5.1 0 9.9-1.6 13.8-4.4L394.2 464h-21.8l-4.4-26.2zm-37.8 48h55.3l8 48h-71.3z"})
);

export default LanDesktopSlashRegular;
