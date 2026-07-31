import React from 'react';

export const LanInfinityThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 240.2C0 169.4 57.4 112 128.2 112c32.7 0 64.2 12.5 88 35L320 245l103.8-98c23.8-22.5 55.3-35 88-35 70.8 0 128.2 57.4 128.2 128.2v31.6c0 70.8-57.4 128.2-128.2 128.2-32.7 0-64.2-12.5-88-35L320 267l-103.8 98c-23.8 22.5-55.3 35-88 35C57.4 400 0 342.6 0 271.8zM308.3 256l-103-97.4C184.4 139 156.9 128 128.2 128 66.2 128 16 178.2 16 240.2v31.6c0 62 50.2 112.2 112.2 112.2 28.7 0 56.2-11 77-30.6zm23.3 0 103.1 97.4c20.8 19.7 48.4 30.6 77 30.6 62 0 112.2-50.2 112.2-112.2v-31.6c0-62-50.2-112.2-112.2-112.2-28.6 0-56.2 11-77 30.6l-103 97.4z"})
);

export default LanInfinityThin;
