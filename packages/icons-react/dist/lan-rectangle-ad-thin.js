import React from 'react';

export const LanRectangleAdThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 88v56h96v-56c0-22.1-17.9-40-40-40h-16c-22.1 0-40 17.9-40 40m96 128v-56h-96v56c0 4.4-3.6 8-8 8s-8-3.6-8-8V216c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56v128c0 4.4-3.6 8-8 8s-8-3.6-8-8m200-176v176c0 4.4-3.6 8-8 8s-8-3.6-8-8v-18.7c-13.2 16.3-33.4 26.7-56 26.7-39.8 0-72-32.2-72-72s32.2-72 72-72c22.6 0 42.8 10.4 56 26.7V168c0-4.4 3.6-8 8-8s8 3.6 8 8m-72 56a56 56 0 1 0 0 112 56 56 0 1 0 0-112"})
);

export default LanRectangleAdThin;
