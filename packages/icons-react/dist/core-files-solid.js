import React from 'react';

export const CoreFilesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 576',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352-32H192c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V96zM64 96H0v384c0 35.3 28.7 64 64 64h288v-64H64z"})
);

export default CoreFilesSolid;
