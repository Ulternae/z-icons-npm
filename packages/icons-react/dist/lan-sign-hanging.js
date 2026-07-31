import React from 'react';

export const LanSignHanging = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 0c8.8 0 16 7.2 16 16v48h400c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v400c0 8.8-7.2 16-16 16s-16-7.2-16-16V96H16C7.2 96 0 88.8 0 80s7.2-16 16-16h48V16c0-8.8 7.2-16 16-16m128 192c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16zm-48 16c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48z"})
);

export default LanSignHanging;
