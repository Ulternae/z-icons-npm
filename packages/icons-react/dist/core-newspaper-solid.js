import React from 'react';

export const CoreNewspaperSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M576 384c0 53-43 96-96 96H96c-53 0-96-43-96-96V96h64v288c0 17.7 14.3 32 32 32s32-14.3 32-32V32h448zm-352-40h256v-48H224zm0-128h256v-48H224z"})
);

export default CoreNewspaperSolid;
