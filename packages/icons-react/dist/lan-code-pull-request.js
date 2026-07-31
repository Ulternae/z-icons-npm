import React from 'react';

export const LanCodePullRequest = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M315.3 27.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 96H352c26.5 0 48 21.5 48 48v209.6c-36.5 7.4-64 39.7-64 78.4 0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4V144c0-44.2-35.8-80-80-80h-73.4zM48 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m64 78.4c36.5-7.4 64-39.7 64-78.4 0-44.2-35.8-80-80-80S16 35.8 16 80c0 38.7 27.5 71 64 78.4v195.2C43.5 361 16 393.3 16 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4zM48 432a48 48 0 1 1 96 0 48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default LanCodePullRequest;
