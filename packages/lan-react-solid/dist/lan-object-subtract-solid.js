import React from 'react';

export function LanObjectSubtractSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v96h96c35.3 0 64 28.7 64 64zM288 288V64H64v224z"})
  );
}

export default LanObjectSubtractSolid;
