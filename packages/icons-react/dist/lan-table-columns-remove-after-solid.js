import React from 'react';

export const LanTableColumnsRemoveAfterSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448.4 32c35.3 0 64 28.7 64 64v32h-64V96h-128v320h128v-32h64v32c0 35.3-28.7 64-64 64h-320c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm-320 384h128V96h-128zm386-227.9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-33.9 33.9 34 34c9.4 9.4 9.4 24.6 0 33.9-9.4 9.4-24.6 9.4-34 0l-33.9-33.9-33.9 33.9c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l33.9-33.9-33.9-33.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l33.9 33.9 33.9-33.9z"})
);

export default LanTableColumnsRemoveAfterSolid;
