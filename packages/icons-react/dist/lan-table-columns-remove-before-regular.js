import React from 'react';

export const LanTableColumnsRemoveBeforeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128.4 32c-35.3 0-64 28.7-64 64v32h48V96c0-8.8 7.2-16 16-16h136v352h-136c-8.8 0-16-7.2-16-16v-32h-48v32c0 33.1 25.2 60.4 57.5 63.7l6.5.3h320l6.5-.3c30.1-3.1 54.1-27 57.1-57.1l.3-6.5v-320c0-35.3-28.7-64-64-64h-320zm320 48c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16h-136V80zM62.5 188.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33.9 33.9-34 34c-9.4 9.4-9.4 24.6 0 33.9 9.4 9.4 24.6 9.4 34 0l33.9-33.9 33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L130.3 256l33.9-33.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L96.4 222z"})
);

export default LanTableColumnsRemoveBeforeRegular;
