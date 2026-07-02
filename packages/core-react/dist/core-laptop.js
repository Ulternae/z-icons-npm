import React from 'react';

export function CoreLaptop({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M576 424c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56v-8h576zM448 32c35.3 0 64 28.7 64 64v256h-64V96H128v256H64V96c0-35.3 28.7-64 64-64z"})
  );
}

export default CoreLaptop;
