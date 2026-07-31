import React from 'react';

export const LanSquare0Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 64c44.2 0 80 35.8 80 80v32c0 44.2-35.8 80-80 80s-80-35.8-80-80v-32c0-44.2 35.8-80 80-80m-64 80v32c0 35.3 28.7 64 64 64s64-28.7 64-64v-32c0-35.3-28.7-64-64-64s-64 28.7-64 64"})
);

export default LanSquare0Thin;
