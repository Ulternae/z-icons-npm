import React from 'react';

export const LanBagsShoppingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 48v48h128V48c0-35.3-28.7-64-64-64s-64 28.7-64 64m-16 48V48c0-44.2 35.8-80 80-80s80 35.8 80 80v48h80c35.3 0 64 28.7 64 64v16h-16v-16c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h80v16H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm64 192v160c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V288c0-26.5-21.5-48-48-48H256c-26.5 0-48 21.5-48 48m-16 0c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64zm120 24c4.4 0 8 3.6 8 8v32c0 35.3 28.7 64 64 64s64-28.7 64-64v-32c0-4.4 3.6-8 8-8s8 3.6 8 8v32c0 44.2-35.8 80-80 80s-80-35.8-80-80v-32c0-4.4 3.6-8 8-8"})
);

export default LanBagsShoppingThin;
