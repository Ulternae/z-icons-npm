import React from 'react';

export const LanBoxUsd = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 160H32v256c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32zm-208-32V48h-95.1c-10.3 0-20 5-26 13.4L39.3 128zm200.7 0-47.6-66.6c-6-8.4-15.7-13.4-26-13.4H240v80zM0 148.5c0-13.3 4.2-26.3 11.9-37.2l49-68.5C72.9 26 92.3 16 112.9 16H335c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zM224 200c8.8 0 16 7.2 16 16v8h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-49.7c-7.9 0-14.3 6.4-14.3 14.3 0 7 5.1 13 12 14.1l45.3 7.6c22.3 3.7 38.7 23 38.7 45.7 0 25.6-20.7 46.3-46.3 46.3H240v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h57.7c7.9 0 14.3-6.4 14.3-14.3 0-7-5.1-13-12-14.1l-45.3-7.6c-22.3-3.7-38.7-23-38.7-45.7 0-25.6 20.7-46.3 46.3-46.3h1.7v-8c0-8.8 7.2-16 16-16"})
);

export default LanBoxUsd;
