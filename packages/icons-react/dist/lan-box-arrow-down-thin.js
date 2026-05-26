import React from 'react';

export const LanBoxArrowDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 148.5c0-1.5-.1-3-.2-4.5H16.2c-.1 1.5-.2 3-.2 4.5V416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zM216 128V32H112.9c-15.5 0-30 7.5-39.1 20.1l-48.9 68.5c-1.7 2.3-3.1 4.8-4.3 7.4zm211.4 0c-1.2-2.6-2.7-5-4.3-7.4l-49-68.5C365.1 39.5 350.5 32 335 32H231.9v96h195.4zM0 148.5c0-13.3 4.2-26.3 11.9-37.2l49-68.5C72.9 26 92.3 16 112.9 16H335c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm218.3 249.2-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l58.4 58.3V216c0-4.4 3.6-8 8-8s8 3.6 8 8v156.7l58.3-58.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-72 72c-3.1 3.1-8.2 3.1-11.3 0"})
);

export default LanBoxArrowDownThin;
