import React from 'react';

export function LanUserViewfinderThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 56C0 25.1 25.1 0 56 0h96c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-22.1 0-40 17.9-40 40v96c0 4.4-3.6 8-8 8s-8-3.6-8-8zM352 8c0-4.4 3.6-8 8-8h96c30.9 0 56 25.1 56 56v96c0 4.4-3.6 8-8 8s-8-3.6-8-8V56c0-22.1-17.9-40-40-40h-96c-4.4 0-8-3.6-8-8M8 352c4.4 0 8 3.6 8 8v96c0 22.1 17.9 40 40 40h96c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56v-96c0-4.4 3.6-8 8-8m496 0c4.4 0 8 3.6 8 8v96c0 30.9-25.1 56-56 56h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h96c22.1 0 40-17.9 40-40v-96c0-4.4 3.6-8 8-8m-376 32c0-53 43-96 96-96h64c53 0 96 43 96 96v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80v24c0 4.4-3.6 8-8 8s-8-3.6-8-8zm184-216a56 56 0 1 0-112 0 56 56 0 1 0 112 0m-128 0a72 72 0 1 1 144 0 72 72 0 1 1-144 0"})
  );
}

export default LanUserViewfinderThin;
