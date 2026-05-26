import React from 'react';

export const LanPumpMedical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 32v96h96V32zm-32 96V32c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v48h16c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64zm160 32H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-96 64h32c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-16v16c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-16H96c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h16v-16c0-17.7 14.3-32 32-32m32 136v-16c0-4.4 3.6-8 8-8h40v-32h-40c-4.4 0-8-3.6-8-8v-40h-32v40c0 4.4-3.6 8-8 8H96v32h40c4.4 0 8 3.6 8 8v40h32z"})
);

export default LanPumpMedical;
