import React from 'react';

export const LanArrowDownToSquareSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.3 9.4zM64 96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v288H64V160h32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
);

export default LanArrowDownToSquareSolid;
