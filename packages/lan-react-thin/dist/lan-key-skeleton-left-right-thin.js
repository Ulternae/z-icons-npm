import React from 'react';

export function LanKeySkeletonLeftRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M624 112a96 96 0 1 0-192 0 96 96 0 1 0 192 0m16 0c0 61.9-50.1 112-112 112s-112-50.1-112-112H272v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-80v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h249.1C424.9 41.7 471.6 0 528 0c61.9 0 112 50.1 112 112M16 400a96 96 0 1 0 192 0 96 96 0 1 0-192 0m-16 0c0-61.9 50.1-112 112-112s112 50.1 112 112h144v-72c0-4.4 3.6-8 8-8s8 3.6 8 8v72h80v-72c0-4.4 3.6-8 8-8s8 3.6 8 8v80c0 4.4-3.6 8-8 8H222.9c-7.8 54.3-54.4 96-110.9 96C50.1 512 0 461.9 0 400"})
  );
}

export default LanKeySkeletonLeftRightThin;
