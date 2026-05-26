import React from 'react';

export const LanTruckLadderSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 32h304c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v80h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V80h-8C10.7 80 0 69.3 0 56s10.7-24 24-24m248 48h-32v80h32zm-80 0h-32v80h32zm-80 0H80v80h32zM32 304c0-26.5 21.5-48 48-48h304V128c0-17.7 14.3-32 32-32h72.4c24.2 0 46.4 13.7 57.2 35.4l55.6 111.1c4.3 8.5 6.8 18.3 6.8 28.6V352c0 35.3-28.7 64-64 64h-3.3c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H268.7c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H80c-26.5 0-48-21.5-48-48zm456.4-144H448v96h88.4zM224 392a40 40 0 1 0-80 0 40 40 0 1 0 80 0m232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanTruckLadderSolid;
