import React from 'react';

export const LanPrescriptionBottleAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 48v48H48V48zM0 96c0 20.9 13.4 38.7 32 45.3V448c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V141.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48zm80 352V144h224v304c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16m84-208v36h-36c-8.8 0-16 7.2-16 16v24c0 8.8 7.2 16 16 16h36v36c0 8.8 7.2 16 16 16h24c8.8 0 16-7.2 16-16v-36h36c8.8 0 16-7.2 16-16v-24c0-8.8-7.2-16-16-16h-36v-36c0-8.8-7.2-16-16-16h-24c-8.8 0-16 7.2-16 16"})
);

export default LanPrescriptionBottleAltRegular;
