import React from 'react';

export const LanEraserSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M178.5 416h123l65.3-65.3-173.5-173.5L66.6 303.9l112 112zm45.5 64h-45.5c-17 0-33.3-6.7-45.3-18.7L17 345C6.1 334.1 0 319.4 0 304s6.1-30.1 17-41L263 17c10.9-10.9 25.6-17 41-17s30.1 6.1 41 17l182 182c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L392 416h120c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})
);

export default LanEraserSolid;
