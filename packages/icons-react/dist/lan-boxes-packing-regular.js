import React from 'react';

export const LanBoxesPackingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 48h48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16h-81.1c-2.5 17.7-9.2 34-18.9 48h100c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64v80h48V64c0-8.8 7.2-16 16-16h48v72c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24zm-48 0v48h-64V48zm-80 400c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336h224zM32 323.8V448c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V323.8c9.8-8.8 16-21.6 16-35.8v-48c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v48c0 14.2 6.2 27 16 35.8M64 288v-48h256v48z"})
);

export default LanBoxesPackingRegular;
