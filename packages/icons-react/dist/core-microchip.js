import React from 'react';

export const CoreMicrochip = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32h64v-64h64v64h64c35.3 0 64 28.7 64 64v64h64v64h-64v64h64v64h-64v64c0 35.3-28.7 64-64 64h-64v64h-64v-64h-64v64h-64v-64h-64l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1l-.3-6.5v-64H.1v-64h64v-64H.1v-64h64v-64l.3-6.5c3.1-30.1 27-54.1 57.1-57.1l6.5-.3h64v-64h64v64zM128 416h320V96H128zm284-36H164V132h248zm-192-56h136V188H220z"})
);

export default CoreMicrochip;
