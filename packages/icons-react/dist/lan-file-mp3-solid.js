import React from 'react';

export const LanFileMp3Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 580 548',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h48V400c0-35.3 28.7-64 64-64h208V170.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0zm261.5 176H264c-13.3 0-24-10.7-24-24V58.5zM225.1 389.7c-4.6-7.7-13.8-11.4-22.5-9S188 391 188 400v128c0 11 9 20 20 20s20-9 20-20v-55.8l10.9 18.1c3.6 6 10.1 9.7 17.1 9.7s13.5-3.7 17.1-9.7l10.9-18.1V528c0 11 9 20 20 20s20-9 20-20V400c0-9-6-16.9-14.7-19.3s-17.9 1.3-22.5 9l-30.9 51.4-30.9-51.4zM368 380c-11 0-20 9-20 20v128c0 11 9 20 20 20s20-9 20-20v-28h12c33.1 0 60-26.9 60-60s-26.9-60-60-60zm32 80h-12v-40h12c11 0 20 9 20 20s-9 20-20 20m180 36c0-12.1-4.1-23.2-11-32 6.9-8.8 11-19.9 11-32 0-28.7-23.3-52-52-52h-32c-11 0-20 9-20 20s9 20 20 20h32c6.6 0 12 5.4 12 12s-5.4 12-12 12h-24c-11 0-20 9-20 20s9 20 20 20h24c6.6 0 12 5.4 12 12s-5.4 12-12 12h-32c-11 0-20 9-20 20s9 20 20 20h32c28.7 0 52-23.3 52-52"})
);

export default LanFileMp3Solid;
