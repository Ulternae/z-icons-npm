import React from 'react';

export const LanTableCellsMerge = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 32c33.1 0 60.4 25.2 63.7 57.5l.3 6.5v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320c-35.3 0-64-28.7-64-64L0 96c0-35.3 28.7-64 64-64zM240 448h144c17.7 0 32-14.3 32-32v-64H240zM32 416c0 17.7 14.3 32 32 32h144v-96H32zm0-96h384V192H32zm208-160h176V96c0-17.7-14.3-32-32-32H240zM64 64c-17.7 0-32 14.3-32 32v64h176V64z"})
);

export default LanTableCellsMerge;
