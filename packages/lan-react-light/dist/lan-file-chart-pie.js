import React from 'react';

export function LanFileChartPie({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192h-96c-35.3 0-64-28.7-64-64zm146.7 128L224 45.3V128c0 17.7 14.3 32 32 32zM0 64C0 28.7 28.7 0 64 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm80 272c0-44.7 26.2-83.2 64-101.2V272c-19.4 14.6-32 37.8-32 64 0 44.2 35.8 80 80 80 26.2 0 49.4-12.6 64-32h37.2c-18 37.8-56.5 64-101.2 64-61.9 0-112-50.1-112-112m222.9 16H208c-17.7 0-32-14.3-32-32v-94.9c5.2-.7 10.6-1.1 16-1.1 61.9 0 112 50.1 112 112 0 5.4-.4 10.8-1.1 16M208 257.6V320h62.4c-6.4-31.3-31.1-56-62.4-62.4"})
  );
}

export default LanFileChartPie;
