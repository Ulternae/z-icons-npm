import React from 'react';

export const LanSquare9Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm184 248c0-4.4 3.6-8 8-8h48c22.1 0 40-17.9 40-40v-29.7c-11.7 13.3-28.9 21.7-48 21.7h-16c-35.3 0-64-28.7-64-64s28.7-64 64-64h16c35.3 0 64 28.7 64 64v72c0 30.9-25.1 56-56 56h-48c-4.4 0-8-3.6-8-8m48-168h-16c-26.5 0-48 21.5-48 48s21.5 48 48 48h16c26.5 0 48-21.5 48-48s-21.5-48-48-48"})
);

export default LanSquare9Thin;
