import React from 'react';

export function LanCircleYenThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m163.7-126.8c3.7-2.4 8.7-1.2 11 2.5L256 260.2l81.2-128.5c2.4-3.7 7.3-4.8 11-2.5s4.8 7.3 2.5 11L267.5 272H328c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v48h64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h64v-48h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h60.5l-83.3-131.7c-2.4-3.7-1.2-8.7 2.5-11z"})
  );
}

export default LanCircleYenThin;
