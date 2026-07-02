import React from 'react';

export function CoreArrowRightFromBracketSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M192 96H96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h96v64H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h96zm310.6 137.4 2.2 2.4c10.2 12.6 9.5 31.1-2.2 42.8L352 429.2l-45.2-45.3 96-96H160v-64h242.8l-96-96L352 82.7l150.6 150.6z"})
  );
}

export default CoreArrowRightFromBracketSolid;
