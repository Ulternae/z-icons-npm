import React from 'react';

export function LanBlueberriesThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M383.9 328.7c65-20.3 112.1-81 112.1-152.7 0-88.4-71.6-160-160-160-71.7 0-132.4 47.1-152.7 112.1-4.5-.2-10.1-.2-16.7.1C187.4 54.2 255.4 0 336 0c97.2 0 176 78.8 176 176 0 80.6-54.2 148.6-128.2 169.4.3-6.6.2-12.3.1-16.7M336 336a160 160 0 1 0-320 0 160 160 0 1 0 320 0M0 336a176 176 0 1 1 352 0 176 176 0 1 1-352 0m168-96v40h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h40v-40c0-4.4 3.6-8 8-8s8 3.6 8 8M360 80v40h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h40V80c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanBlueberriesThin;
