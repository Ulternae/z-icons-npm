import React from 'react';

export function CoreBedEmpty({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 32v96h480c53 0 96 43 96 96v256h-64v-64H64v64H0V32zm128 160H64v160h128zm64 160h320V224c0-17.7-14.3-32-32-32H256z"})
  );
}

export default CoreBedEmpty;
