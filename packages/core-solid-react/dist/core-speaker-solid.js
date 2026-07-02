import React from 'react';

export function CoreSpeakerSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M384 0c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM224 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160m128 80a128 128 0 1 0-256 0 128 128 0 1 0 256 0M256 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
  );
}

export default CoreSpeakerSolid;
