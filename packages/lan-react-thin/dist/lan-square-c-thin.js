import React from 'react';

export function LanSquareCThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm161.8 97.8c-34.4 34.4-34.4 90.1 0 124.4s90.1 34.4 124.4 0c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3c-40.6 40.6-106.5 40.6-147.1 0s-40.6-106.5 0-147.1 106.5-40.6 147.1 0c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0c-34.4-34.4-90.1-34.4-124.4 0z"})
  );
}

export default LanSquareCThin;
