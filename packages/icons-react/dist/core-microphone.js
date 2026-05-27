import React from 'react';

export const CoreMicrophone = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 224V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 17.7 14.3 32 32 32s32-14.3 32-32M224 0c53 0 96 43 96 96v128c0 53-43 96-96 96s-96-43-96-96V96c0-53 43-96 96-96M64 192v32c0 88.4 71.6 160 160 160s160-71.6 160-160v-32h64v32c0 112.8-83.4 206.2-192 221.7V512h-64v-66.3C83.4 430.2 0 336.8 0 224v-32z"})
);

export default CoreMicrophone;
