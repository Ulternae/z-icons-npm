import React from 'react';

export const CoreLightbulb = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 192c0-70.7 57.3-128 128-128s128 57.3 128 128c0 52.4-31.5 97.6-76.8 117.4l-19.2 8.4v34.3h-64v-34.3l-19.2-8.4C95.5 289.6 64 244.4 64 192M192 0C86 0 0 86 0 192c0 71.2 38.8 133.4 96.3 166.5 3.3 32.3 30.5 57.5 63.7 57.5h64c33.2 0 60.4-25.2 63.7-57.5C345.2 325.4 384 263.3 384 192 384 86 298 0 192 0m-64 448v64h128v-64z"})
);

export default CoreLightbulb;
