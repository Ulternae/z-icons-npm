import React from 'react';

export function LanDollarSignThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M152 8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h96c4.4 0 8 3.6 8 8s-3.6 8-8 8H113c-44.7 0-80.9 36.2-80.9 80.9 0 41 30.7 75.6 71.5 80.4l114.9 13.5c48.8 5.7 85.6 47.1 85.6 96.3 0 53.5-43.4 96.9-96.9 96.9h-39.1v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-112c-4.4 0-8-3.6-8-8s3.6-8 8-8h167.1c44.7 0 80.9-36.2 80.9-80.9 0-41-30.7-75.6-71.5-80.4l-115-13.5C52.8 251.4 16 210.1 16 160.9 16 107.4 59.4 64 112.9 64H152z"})
  );
}

export default LanDollarSignThin;
