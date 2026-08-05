import React from 'react';

export function LanMagnifyingGlassPlaySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.1-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208m-269.6 81c0 8.3 6.7 15 15 15 2.7 0 5.4-.7 7.7-2.1l132.2-79.3c5.1-3.1 8.2-8.6 8.2-14.5s-3.1-11.5-8.2-14.5l-132.1-79.5c-2.3-1.4-5-2.1-7.7-2.1-8.3 0-15 6.7-15 15v161.9z"})
  );
}

export default LanMagnifyingGlassPlaySolid;
