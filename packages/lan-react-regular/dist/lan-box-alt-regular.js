import React from 'react';

export function LanBoxAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 176v48c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-48H48v240c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V176zm0-48h101l-40.9-57.3c-3-4.2-7.9-6.7-13-6.7h-68.4zM181.3 64h-68.4c-5.2 0-10 2.5-13 6.7L59 128h101zM0 148.5c0-13.3 4.2-26.3 11.9-37.2l49-68.5C72.9 26 92.3 16 112.9 16H335c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default LanBoxAltRegular;
