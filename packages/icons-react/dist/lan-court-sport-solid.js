import React from 'react';

export const LanCourtSportSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M576 480H344V365.4c50.3-11 88-55.8 88-109.4s-37.7-98.4-88-109.4V32h232c35.3 0 64 28.7 64 64v32h-64c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h64v32c0 35.3-28.7 64-64 64M296 146.6c-50.3 11-88 55.8-88 109.4s37.7 98.4 88 109.4V480H64c-35.3 0-64-28.7-64-64v-32h64c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H0V96c0-35.3 28.7-64 64-64h232zm0 168.8c-23.5-9.5-40-32.5-40-59.3s16.5-49.9 40-59.3v118.7zm48 0V196.7c23.5 9.5 40 32.5 40 59.3s-16.5 49.9-40 59.3zM576 176h64v160h-64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16M64 336H0V176h64c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16"})
);

export default LanCourtSportSolid;
