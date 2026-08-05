import React from 'react';

export function LanCalculatorAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0c4.4 0 8 3.6 8 8v240h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H264v240c0 4.4-3.6 8-8 8s-8-3.6-8-8V264H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h240V8c0-4.4 3.6-8 8-8m88 104h48V40c0-4.4 3.6-8 8-8s8 3.6 8 8v64h64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8zM50.7 338.7c3.1-3.1 8.2-3.1 11.3 0l49.9 49.9 49.9-49.9c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-49.9 49.9 49.9 49.9c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L112 411.3l-49.9 50c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l49.9-49.9-49.9-49.9c-3.1-3.1-3.1-8.2 0-11.3zM40 104h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8s3.6-8 8-8m288 256h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H328c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 64h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H328c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
  );
}

export default LanCalculatorAltThin;
