import React from 'react';

export function LanPlaneTail({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64.6 6.4c3-4 7.8-6.4 12.8-6.4h80.1c24 0 46.9 10.3 62.8 28.2L423.1 256h88.8v32h-424c-13.3 0-24 10.7-24 24v5.3c0 7.1 3.2 13.8 8.6 18.4C184.4 429 325.5 480 471.1 480h40.8v32h-40.8C317.9 512 169.6 458.3 52 360.3c-12.7-10.6-20.1-26.4-20.1-43V312c0-30.9 25.1-56 56-56h42.4L61.9 20.5c-1.4-4.8-.5-10 2.6-14.1zm131.9 43.1C186.6 38.4 172.4 32 157.6 32H98.8l65 224h216.6L196.6 49.5zM304 352h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanPlaneTail;
