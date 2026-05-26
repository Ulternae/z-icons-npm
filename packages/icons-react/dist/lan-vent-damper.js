import React from 'react';

export const LanVentDamper = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 128v32H32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h32v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32h32c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32h-32v-32c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64m0 64v128H32V192zm544 128h-32V192h32zM176 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 80c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 80c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanVentDamper;
