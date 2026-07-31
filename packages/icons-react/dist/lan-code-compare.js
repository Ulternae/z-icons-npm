import React from 'react';

export const LanCodeCompare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M196.7 4.7c-6.2 6.2-6.2 16.4 0 22.6L233.4 64H160c-44.2 0-80 35.8-80 80v209.6C43.5 361 16 393.3 16 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4V144c0-26.5 21.5-48 48-48h73.4l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c6.2-6.2 6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0M464 80a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-64 78.4V368c0 26.5-21.5 48-48 48h-73.4l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 448H352c44.2 0 80-35.8 80-80V158.4c36.5-7.4 64-39.7 64-78.4 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 38.7 27.5 71 64 78.4M144 432a48 48 0 1 1-96 0 48 48 0 1 1 96 0"})
);

export default LanCodeCompare;
