import React from 'react';

export function CoreCalendarPlus({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 32h128v-64h64v64h32c35.3 0 64 28.7 64 64v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V96c0-35.3 28.7-64 64-64h32v-64h64zM64 416h320V96H64zm188-188h68v56h-68v68h-56v-68h-68v-56h68v-68h56z"})
  );
}

export default CoreCalendarPlus;
