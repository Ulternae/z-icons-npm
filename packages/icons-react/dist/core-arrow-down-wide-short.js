import React from 'react';

export const CoreArrowDownWideShort = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M182.9 470.6c-12.5 12.5-32.8 12.5-45.3 0L19 352l45.3-45.3 64 64V32h64v338.7l64-64 45.2 45.3zM576.3 128h-256V64h288v64zm-96 320h-160v-64h160zm32-160h-192v-64h224v64z"})
);

export default CoreArrowDownWideShort;
