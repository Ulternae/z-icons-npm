import React from 'react';

export const CorePaperclipSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 160C0 71.6 71.6 0 160 0s160 71.6 160 160v128c0 53-43 96-96 96s-96-43-96-96V160h64v128c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-53-43-96-96-96s-96 43-96 96v128c0 88.4 71.6 160 160 160s160-71.6 160-160V160h64v128c0 123.7-100.3 224-224 224S0 411.7 0 288z"})
);

export default CorePaperclipSolid;
