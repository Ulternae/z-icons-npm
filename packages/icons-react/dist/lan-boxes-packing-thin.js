import React from 'react';

export const LanBoxesPackingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 16h64c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48h-90.8c-2.7 5.6-5.8 11-9.3 16H480c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64v80h16V64c0-26.5 21.5-48 48-48h64v88c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24zm-16 0v88c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V16zm-64 432c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V304h288zM32 299.7V448c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V299.7c9.6-5.5 16-15.9 16-27.7v-48c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v48c0 11.8 6.4 22.2 16 27.7M336 288H48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16"})
);

export default LanBoxesPackingThin;
