import React from 'react';

export function CoreFrame({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 96h192V0h64v96h96v64h-96v192h96v64h-96v96h-64v-96H160v96H96v-96H0v-64h96V160H0V96h96V0h64zm0 256h192V160H160z"})
  );
}

export default CoreFrame;
