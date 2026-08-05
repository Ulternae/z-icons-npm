import React from 'react';

export function CoreGhostSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M342 496.6 304 464l-37.8 32.4C254.5 506.5 239.5 512 224 512s-30.5-5.5-42.2-15.6L144 464l-38 32.6C94.4 506.5 79.6 512 64.3 512H0V224C0 100.3 100.3 0 224 0s224 100.3 224 224v288h-64.3c-15.3 0-30-5.5-41.6-15.4zM200 224a40 40 0 1 0-80 0 40 40 0 1 0 80 0m88 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
  );
}

export default CoreGhostSolid;
