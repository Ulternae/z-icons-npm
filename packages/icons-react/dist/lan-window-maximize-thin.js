import React from 'react';

export const LanWindowMaximizeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 83.2c-24.7 0-44.8 20.1-44.8 44.8v48h473.6v-48c0-24.7-20.1-44.8-44.8-44.8zM19.2 192v192c0 24.7 20.1 44.8 44.8 44.8h384c24.7 0 44.8-20.1 44.8-44.8V192zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanWindowMaximizeThin;
