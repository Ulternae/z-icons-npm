import React from 'react';

export const LanArrowUpTriangleSquareSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M150.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 141.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.3l25.4 25.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-80-80zM411.1 47c-5.8-9.3-16.1-15-27.1-15s-21.3 5.7-27.1 15l-80 128c-6.2 9.9-6.5 22.3-.9 32.5s16.4 16.5 28 16.5h160c11.6 0 22.3-6.3 28-16.5s5.3-22.6-.9-32.5zM288 336v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48"})
);

export default LanArrowUpTriangleSquareSolid;
