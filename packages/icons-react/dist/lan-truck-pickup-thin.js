import React from 'react';

export const LanTruckPickupThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48c-8.8 0-16 7.2-16 16v128h237.3L404.9 71.3C396.2 56.8 380.6 48 363.8 48zm-32 144V64c0-17.7 14.3-32 32-32h107.8c22.5 0 43.3 11.8 54.9 31.1L496 192h64c26.5 0 48 21.5 48 48v128h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56.4c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H239.7c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V240c0-26.5 21.5-48 48-48zm0 16H80c-17.7 0-32 14.3-32 32v128h19.3c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64h166.6c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64H592V240c0-17.7-14.3-32-32-32zm0 184a72 72 0 1 0-144 0 72 72 0 1 0 144 0m264 72a72 72 0 1 0 0-144 72 72 0 1 0 0 144"})
);

export default LanTruckPickupThin;
