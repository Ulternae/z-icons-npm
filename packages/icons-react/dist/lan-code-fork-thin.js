import React from 'react';

export const LanCodeForkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M72 128a56 56 0 1 0 0-112 56 56 0 1 0 0 112m72-56c0 37.1-28 67.6-64 71.6V192c0 39.8 32.2 72 72 72h144c39.8 0 72-32.2 72-72v-48.4c-36-4-64-34.5-64-71.6 0-39.8 32.2-72 72-72s72 32.2 72 72c0 37.1-28 67.6-64 71.6V192c0 48.6-39.4 88-88 88h-64v88.4c36 4 64 34.5 64 71.6 0 39.8-32.2 72-72 72s-72-32.2-72-72c0-37.1 28-67.6 64-71.6V280h-64c-48.6 0-88-39.4-88-88v-48.4c-36-4-64-34.5-64-71.6C0 32.2 32.2 0 72 0s72 32.2 72 72m232 56a56 56 0 1 0 0-112 56 56 0 1 0 0 112m-96 312a56 56 0 1 0-112 0 56 56 0 1 0 112 0"})
);

export default LanCodeForkThin;
