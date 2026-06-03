import React from 'react';

export const LanDagger = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 569.25',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192-32c8.8 0 16 7.2 16 16V96h128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48v-16h-32v338.7c0 8.5-3.4 16.6-9.4 22.6l-43.3 43.3c-6.2 6.2-16.4 6.2-22.6 0l-43.3-43.3c-6-6-9.4-14.1-9.4-22.6V128H96v16c0 26.5-21.5 48-48 48S0 170.5 0 144s21.5-48 48-48h128V-16c0-8.8 7.2-16 16-16m-32 160v338.7l32 32 32-32V128zm-112 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16v-16zm272 0v16c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16z"})
);

export default LanDagger;
