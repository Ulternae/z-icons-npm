import React from 'react';

export const LanMapMarkerSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L422.6 356.7c32.2-53.8 57.4-113.4 57.4-168.1C480 84.4 394 0 288 0c-61 0-115.4 28-150.6 71.6zm130.6 130.7C197.7 70.9 239.8 48 288 48c80.3 0 144 63.7 144 140.6 0 39-17.5 85.6-44.5 133.1zm161.5 297.1c-16.2 21.2-31.9 39.9-45.1 54.8-24.1-27.3-56.8-67.2-85.1-112.1-28.2-44.7-49.2-89.6-56.3-129.2l-49.4-49.3c-.8 7.1-1.2 14.2-1.2 21.5 0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.5 12.8 43.3 0 14.8-16 35.6-39.7 57.7-68.2L333.2 403z"})
);

export default LanMapMarkerSlashRegular;
