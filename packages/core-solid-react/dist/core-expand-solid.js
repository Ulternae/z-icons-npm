import React from 'react';

export function CoreExpandSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M32 0C14.3 0 0 14.3 0 32v128h64V64h96V0zm32 384v-32H0v128c0 17.7 14.3 32 32 32h128v-64H64zM384 0h-32v64h96v96h64V32c0-17.7-14.3-32-32-32zm128 384v-32h-64v96h-96v64h128c17.7 0 32-14.3 32-32z"})
  );
}

export default CoreExpandSolid;
