import React from 'react';

export const LanStool = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M344 32c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-35.6l27.5 302.6c.8 8.8-5.7 16.6-14.5 17.4s-16.6-5.7-17.4-14.5L290.8 320H93.2L79.9 465.4c-.8 8.8-8.6 15.3-17.4 14.5s-15.3-8.6-14.5-17.4L75.6 160H40c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40zM107.6 161.4 96.1 288H288l-11.5-126.6-.1-1.4H107.8l-.1 1.4zM40 64c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z"})
);

export default LanStool;
