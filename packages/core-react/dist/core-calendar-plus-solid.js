import React from 'react';

export function CoreCalendarPlusSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 32h128v-64h64v64h32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h32v-64h64zm40 128v72h-72v48h72v72h48v-72h72v-48h-72v-72z"})
  );
}

export default CoreCalendarPlusSolid;
