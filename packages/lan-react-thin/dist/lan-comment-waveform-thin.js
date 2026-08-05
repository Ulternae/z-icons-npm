import React from 'react';

export function LanCommentWaveformThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 536',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M130.5 377.4c4.1 4.9 4.9 11.7 2 17.4l-49.4 98.7 124.8-49.9c3.9-1.6 8.3-1.5 12.2.1 30.4 13 64.2 20.2 99.9 20.2v16c-37.9 0-73.8-7.7-106.2-21.5L82.4 511c-10.8 4.3-22.4-7.1-17-17.8l52.8-105.6C84.2 346.9 64 295.7 64 240 64 107.5 178.6 0 320 0s256 107.5 256 240c0 17.7-2 35-5.9 51.6-4.4-3.4-9.3-6.1-14.6-8.1q4.5-21.15 4.5-43.5c0-122.8-106.5-224-240-224S80 117.2 80 240c0 51.7 18.8 99.4 50.5 137.4M464 304v224c0 4.4-3.6 8-8 8s-8-3.6-8-8V304c0-4.4 3.6-8 8-8s8 3.6 8 8m80 32v160c0 4.4-3.6 8-8 8s-8-3.6-8-8V336c0-4.4 3.6-8 8-8s8 3.6 8 8m-160 16v128c0 4.4-3.6 8-8 8s-8-3.6-8-8V352c0-4.4 3.6-8 8-8s8 3.6 8 8m240 32v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanCommentWaveformThin;
