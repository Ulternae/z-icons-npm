import React from 'react';

export const LanTableColumnsRemoveBeforeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-3.025 0 515.025 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M90 32.3c-30.1 3.1-54.1 27-57.1 57.1l-.3 6.5v32h16v-32c0-26.5 21.5-48 48-48h152v416h-152c-26.5 0-48-21.5-48-48v-32h-16v32l.3 6.5c3.2 32.4 30.5 57.6 63.6 57.6h320c35.3 0 64-28.7 64-64V96l-.3-6.5C476.9 57.2 449.6 32 416.5 32h-320zM416.5 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48h-152V48zM10.7 190.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L53.2 256-.7 309.8c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l53.8-53.8 53.8 53.8c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L75.8 256l53.9-53.8c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-53.8 53.8-53.8-53.8z"})
);

export default LanTableColumnsRemoveBeforeThin;
