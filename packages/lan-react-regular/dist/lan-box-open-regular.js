import React from 'react';

export function LanBoxOpenRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-2.5 -6.8 578.5 525.6',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M264 362.5v100.7l-147.4-81.9c-12.7-7.1-20.6-20.4-20.6-35v-41l116.9 66.8c17.5 10 39.1 5.3 51-9.7zm-7.1-96.3-27.7 60-181-103.4L78.3 167zM114.2 132l154.4-85.8c12.1-6.7 26.8-6.7 38.8 0L461.8 132 288 228.5zM528 214.6l3.4 5.7c6.8 11.4 21.6 15.1 32.9 8.2s15-21.6 8.2-32.9l-41.4-69c-6.5-10.8-15.7-19.8-26.8-25.9L330.8 4.3a87.87 87.87 0 0 0-85.5 0L72.6 100.2c-12 6.7-21.9 16.7-28.4 28.8L2.3 206.9C-8 226-1.2 249.8 17.7 260.6L48.1 278v68.4c0 32 17.3 61.4 45.3 76.9l152 84.4c26.6 14.8 58.9 14.8 85.5 0l152-84.4c27.9-15.5 45.3-45 45.3-76.9V214.7zm-216 55.5 168-93.3v169.6c0 14.5-7.9 27.9-20.6 35L312 463.2z"})
  );
}

export default LanBoxOpenRegular;
