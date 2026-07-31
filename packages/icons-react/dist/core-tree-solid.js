import React from 'react';

export const CoreTreeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48.1 448h176v64h64v-64h176c33 0 51.8-37.6 32-64l-69.7-93 7.6-7.6c13.8-13.8 15.6-35.6 4.3-51.5L288.6 22.5c-16-22.3-49.1-22.3-65.1 0L74 231.9c-11.4 15.9-9.6 37.7 4.3 51.5l7.6 7.6-69.7 93c-19.8 26.4-1 64 32 64z"})
);

export default CoreTreeSolid;
