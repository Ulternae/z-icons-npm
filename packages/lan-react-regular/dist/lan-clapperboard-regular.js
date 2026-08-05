import React from 'react';

export function LanClapperboardRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 64h-70.1l-1 1-127 127H342l1-1L467.1 66.9c-6-1.9-12.4-2.9-19.1-2.9M182.1 192l1-1 127-127H218l-1 1L90 192zM48 192v-25.9L150.1 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-11-2.8-21.4-7.7-30.4L409.9 192H464v192c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16z"})
  );
}

export default LanClapperboardRegular;
