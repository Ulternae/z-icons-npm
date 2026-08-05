import React from 'react';

export function LanCommentExclamationThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0c141.4 0 256 107.5 256 240S397.4 480 256 480c-37.9 0-73.8-7.7-106.2-21.5L18.4 511c-10.8 4.3-22.4-7-17-17.8l52.8-105.5C20.2 346.9 0 295.7 0 240 0 107.5 114.6 0 256 0m0 16C122.5 16 16 117.2 16 240c0 51.7 18.8 99.4 50.5 137.4 4.1 4.9 4.8 11.7 2 17.4l-49.3 98.7L144 443.6c3.9-1.6 8.4-1.5 12.2.2 30.4 13 64.2 20.2 99.8 20.2 133.5 0 240-101.2 240-224S389.5 16 256 16m0 352a16 16 0 1 1 0-32 16 16 0 1 1 0 32m2.9-255.7c6.6 1.4 11.5 7.4 11.3 14.4L264 288.3c-.2 4.3-3.7 7.7-8 7.7s-7.8-3.4-8-7.7l-6.2-161.6c-.3-8 6.1-14.7 14.2-14.7z"})
  );
}

export default LanCommentExclamationThin;
