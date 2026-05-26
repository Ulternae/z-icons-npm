import React from 'react';

export const LanMicrowaveThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h416v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm416 104v176c0 4.4 3.6 8 8 8s8-3.6 8-8V168c0-4.4-3.6-8-8-8s-8 3.6-8 8m-360 8h272c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8H120c-4.4 0-8-3.6-8-8V184c0-4.4 3.6-8 8-8m-24 8v144c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24"})
);

export default LanMicrowaveThin;
