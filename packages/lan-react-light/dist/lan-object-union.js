import React from 'react';

export function LanObjectUnion({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 320c17.7 0 32 14.3 32 32v96c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-96c-17.7 0-32-14.3-32-32V64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32zm-32 32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v96h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96z"})
  );
}

export default LanObjectUnion;
