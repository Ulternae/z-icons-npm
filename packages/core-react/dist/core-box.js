import React from 'react';

export function CoreBox({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M112 0h288l9.6 12.8 89.6 119.5c8.3 11.1 12.8 24.6 12.8 38.4V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V170.7c0-13.8 4.5-27.3 12.8-38.4l89.6-119.5zm32 64-51 68h135V64zm140 0v68h135l-51-68zM64 448h384V188H64z"})
  );
}

export default CoreBox;
