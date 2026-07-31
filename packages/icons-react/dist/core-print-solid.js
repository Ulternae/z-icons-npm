import React from 'react';

export const CorePrintSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 128h32c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64h-32v96H96v-96H64C30.9 416 3.6 390.8.3 358.5L0 352V192c0-35.3 28.7-64 64-64h32V0h320zM160 320v128h192V320zm0-192h192V64H160z"})
);

export default CorePrintSolid;
