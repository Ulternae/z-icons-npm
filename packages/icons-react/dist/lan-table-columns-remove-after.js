import React from 'react';

export const LanTableColumnsRemoveAfter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 520.45 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416.5 32c35.3 0 64 28.7 64 64v32h-32V96c0-17.7-14.3-32-32-32h-144v384h144c17.7 0 32-14.3 32-32v-32h32v32c0 35.3-28.7 64-64 64h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1l-.3-6.5v-320c0-35.3 28.7-64 64-64h320zm-320 32c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h144V64zm396.7 124.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L471.1 256l44.7 44.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-44.7-44.7-44.7 44.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l44.7-44.7-44.7-44.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l44.7 44.7z"})
);

export default LanTableColumnsRemoveAfter;
