import React from 'react';

export const LanLevelUpAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M203.3 20.7c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-4.6 4.6-5.9 11.5-3.5 17.4S57.5 176 64 176h72c4.4 0 8 3.6 8 8v168c0 26.5-21.5 48-48 48H32c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c79.5 0 144-64.5 144-144V184c0-4.4 3.6-8 8-8h72c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4zM169.4 9.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S333 192.1 320 192.1h-64v160c0 88.4-71.6 160-160 160H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h64c17.7 0 32-14.3 32-32v-160H64c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128z"})
);

export default LanLevelUpAltThin;
