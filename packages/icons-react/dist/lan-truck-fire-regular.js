import React from 'react';

export const LanTruckFireRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 24C0 10.7 10.7 0 24 0h528c13.3 0 24 10.7 24 24s-10.7 24-24 24H304v80h112c0-17.7 14.3-32 32-32s32 14.3 32 32h32c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64h-3.3c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H236.7c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H64c-35.3 0-64-28.7-64-64V192c0-23.7 12.9-44.4 32-55.4V48h-8C10.7 48 0 37.3 0 24m256 104V48h-64v80zM80 48v80h64V48zm288 128H64c-8.8 0-16 7.2-16 16v48h320zm48 0v64h112v-48c0-8.8-7.2-16-16-16zm112 112H48v96c0 8.8 7.2 16 16 16h3.3c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64h102.6c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64h3.3c8.8 0 16-7.2 16-16zM192 424a40 40 0 1 0-80 0 40 40 0 1 0 80 0m232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanTruckFireRegular;
