import React from 'react';

export const LanDownloadRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v246.1l-63-63c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L207 345c9.4 9.4 24.6 9.4 33.9 0L345 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-63 63V24zM66.2 272H64c-35.3 0-64 28.7-64 64v80c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64v-80c0-35.3-28.7-64-64-64h-2.2l-48 48H384c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-80c0-8.8 7.2-16 16-16h50.2zM368 376a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanDownloadRegular;
