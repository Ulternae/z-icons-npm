import React from 'react';

export function CoreBedSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64V32H0v448h64v-96h512v96h64V192c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32v192H64zm224 128a96 96 0 1 0-192 0 96 96 0 1 0 192 0"})
  );
}

export default CoreBedSolid;
