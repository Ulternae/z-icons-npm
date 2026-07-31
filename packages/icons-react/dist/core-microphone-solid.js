import React from 'react';

export const CoreMicrophoneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 96v128c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96s-96 43-96 96M64 224v-32H0v32c0 112.8 83.4 206.2 192 221.7V512h64v-66.3C364.6 430.2 448 336.8 448 224v-32h-64v32c0 88.4-71.6 160-160 160S64 312.4 64 224"})
);

export default CoreMicrophoneSolid;
