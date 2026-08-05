import React from 'react';

export function LanBucketThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 0c70.7 0 128 57.3 128 128v64h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-25.6l-26.1 260.8-.7 4.5c-4.1 20.8-21.4 36.5-42.5 38.5l-4.6.2H107.4l-4.6-.2c-21.1-2-38.4-17.7-42.5-38.5l-.6-4.5L33.6 208H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h88v-64C96 57.3 153.3 0 224 0M75.6 467.2l.4 3c3 14.9 16 25.8 31.4 25.8h233.1c16.4 0 30.2-12.5 31.8-28.8l26-259.2H49.7zM224 16c-61.9 0-112 50.1-112 112v64h224v-64c0-61.9-50.1-112-112-112"})
  );
}

export default LanBucketThin;
