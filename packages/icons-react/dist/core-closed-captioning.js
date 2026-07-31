import React from 'react';

export const CoreClosedCaptioning = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 96v320H64V96zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm52 160v128c0 19.9 16.1 36 36 36h80c19.9 0 36-16.1 36-36v-40h-56v20h-40v-88h40v20h56v-40c0-19.9-16.1-36-36-36h-80c-19.9 0-36 16.1-36 36m228-36c-19.9 0-36 16.1-36 36v128c0 19.9 16.1 36 36 36h80c19.9 0 36-16.1 36-36v-40h-56v20h-40v-88h40v20h56v-40c0-19.9-16.1-36-36-36z"})
);

export default CoreClosedCaptioning;
