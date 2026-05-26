import React from 'react';

export const LanAnchorCircleExclamation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 32a48 48 0 1 0 0 96 48 48 0 1 0 0-96m-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4v304.8c4.5-.4 8.9-1.1 13.2-1.9 3.5 10.4 7.9 20.5 13.1 30-13.6 3.1-27.7 4.7-42.3 4.7-106 0-192-86-192-192v-28.7l-37.5 32.8c-6.7 5.8-16.8 5.1-22.6-1.5s-5.1-16.8 1.5-22.6l64-56c6-5.3 15-5.3 21.1 0l64 56c6.7 5.8 7.3 15.9 1.5 22.6s-15.9 7.3-22.6 1.5L128 275.3V304c0 83 63.1 151.2 144 159.2V158.4c-36.5-7.4-64-39.7-64-78.4m400 320a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 44a20 20 0 1 1 0 40 20 20 0 1 1 0-40m0-124c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"})
);

export default LanAnchorCircleExclamation;
