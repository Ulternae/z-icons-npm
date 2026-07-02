import React from 'react';

export function CoreBoltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576.1 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M84 326.5 0 320 292.4 27.6 352-32c3.9 50.5 9 117.6 15.5 201.2.3 3.9 3.4 7.1 7.4 7.4 83.6 6.4 150.6 11.6 201.2 15.5L283.7 484.5 224 544c-3.9-50.5-9-117.6-15.5-201.2-.3-3.9-3.4-7.1-7.4-7.4z"})
  );
}

export default CoreBoltSolid;
