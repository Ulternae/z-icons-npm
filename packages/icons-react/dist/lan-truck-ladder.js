import React from 'react';

export const LanTruckLadder = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h16v96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32V64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm256 32v96h-48V64zm-80 0v96h-48V64zm-80 0v96H64V64zm272 208h192v80c0 17.7-14.3 32-32 32h-.4c-4-44.9-41.7-80-87.6-80s-83.6 35.1-87.6 80h-96.7c-4-44.9-41.7-80-87.6-80s-83.6 35.1-87.6 80H80c-8.8 0-16-7.2-16-16v-80c0-8.8 7.2-16 16-16zm0-32H80c-26.5 0-48 21.5-48 48v80c0 26.5 21.5 48 48 48h19.3c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h102.6c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h3.3c35.3 0 64-28.7 64-64v-95.4c0-11.4-3-22.1-8.1-31.1l-53.7-96.6C535 108.6 513.6 96 490.3 96H416c-17.7 0-32 14.3-32 32zm32 0V128h74.3c11.6 0 22.3 6.3 28 16.5l53.1 95.5zM128 392a56 56 0 1 1 112 0 56 56 0 1 1-112 0m328-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanTruckLadder;
