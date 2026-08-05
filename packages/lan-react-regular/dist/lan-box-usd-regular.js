import React from 'react';

export function LanBoxUsdRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 176v240c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V176zm200-48h141l-40.9-57.3c-3-4.2-7.9-6.7-13-6.7H248zm-48-64h-87.1c-5.2 0-10 2.5-13 6.7L59 128h141zM0 148.5c0-13.3 4.2-26.3 11.9-37.2l49-68.5C72.9 26 92.3 16 112.9 16H335c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zM228 200c11 0 20 9 20 20v4h8c11 0 20 9 20 20s-9 20-20 20h-43.4c-4.7 0-8.6 3.8-8.6 8.6 0 4.1 2.9 7.6 6.9 8.4l34.1 6.8c22.7 4.5 39 24.5 39 47.6 0 22.5-15.3 41.4-36 46.9v5.6c0 11-9 20-20 20s-20-9-20-20v-4h-16c-11 0-20-9-20-20s9-20 20-20h43.4c4.7 0 8.6-3.8 8.6-8.6 0-4.1-2.9-7.6-6.9-8.4l-34.1-6.7c-22.7-4.5-39-24.5-39-47.6 0-25.3 19.3-46.1 44-48.4V220c0-11 9-20 20-20"})
  );
}

export default LanBoxUsdRegular;
