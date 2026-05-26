import React from 'react';

export const LanFirstAid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M115.6 416h280.9V96H115.6zm-32 0V96H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32zM64 64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64m364.4 352H448c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32h-19.6zM240 160h32c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-16v16c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-16h-16c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h16v-16c0-17.7 14.3-32 32-32m32 136v-16c0-4.4 3.6-8 8-8h40v-32h-40c-4.4 0-8-3.6-8-8v-40h-32v40c0 4.4-3.6 8-8 8h-40v32h40c4.4 0 8 3.6 8 8v40h32z"})
);

export default LanFirstAid;
