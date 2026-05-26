import React from 'react';

export const LanArrowDownFromDottedLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128zM0 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m138.7 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m74.7-32a32 32 0 1 0 64 0 32 32 0 1 0-64 0M352 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanArrowDownFromDottedLineSolid;
