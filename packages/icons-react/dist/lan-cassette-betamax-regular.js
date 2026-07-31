import React from 'react';

export const LanCassetteBetamaxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 160v224c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V160zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm320 128v48h48v-48zm-48-16c0-17.7 14.3-32 32-32h80c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32h-80c-17.7 0-32-14.3-32-32zm-112 64a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-96a72 72 0 1 1 0 144 72 72 0 1 1 0-144"})
);

export default LanCassetteBetamaxRegular;
