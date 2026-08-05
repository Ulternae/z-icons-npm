import React from 'react';

export function LanOpenCaptioningThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm272 112h24c22.1 0 40 17.9 40 40 0 4.4 3.6 8 8 8s8-3.6 8-8c0-30.9-25.1-56-56-56h-24c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h24c30.9 0 56-25.1 56-56 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 22.1-17.9 40-40 40h-24c-22.1 0-40-17.9-40-40v-80c0-22.1 17.9-40 40-40m-224 40c0-22.1 17.9-40 40-40h24c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40h-24c-22.1 0-40-17.9-40-40zm40-56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h24c30.9 0 56-25.1 56-56v-80c0-30.9-25.1-56-56-56z"})
  );
}

export default LanOpenCaptioningThin;
