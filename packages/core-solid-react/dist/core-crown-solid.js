import React from 'react';

export function CoreCrownSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M512 32q-71.25 47.4-144 96L256 32l-112 96Q71.25 79.4 0 32c3 21.1 21.3 148.9 54.7 383.2 5.1 35.6 38.4 60 73.9 54.1l64.3-10.7c41.8-7 84.5-7 126.3 0l64.3 10.7c35.4 5.9 68.8-18.5 73.9-54.1 33.5-234.3 51.7-362 54.7-383.2z"})
  );
}

export default CoreCrownSolid;
