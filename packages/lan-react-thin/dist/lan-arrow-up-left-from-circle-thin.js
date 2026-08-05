import React from 'react';

export function LanArrowUpLeftFromCircleThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M184 0H8C3.6 0 0 3.6 0 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3l298.3 298.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 16H184c4.4 0 8-3.6 8-8s-3.6-8-8-8m104 64c-4.4 0-8 3.6-8 8s3.6 8 8 8c114.9 0 208 93.1 208 208s-93.1 208-208 208S80 402.9 80 288c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64"})
  );
}

export default LanArrowUpLeftFromCircleThin;
