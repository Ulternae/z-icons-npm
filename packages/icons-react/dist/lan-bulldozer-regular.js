import React from 'react';

export const LanBulldozerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M200.4 32c24.2 0 46.4 13.7 57.2 35.4L319.9 192h32v-72c0-13.3 10.7-24 24-24s24 10.7 24 24v74c27.6 7.1 48 32.2 48 62v40h80v-80c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40v208c0 22.1 17.9 40 40 40 13.3 0 24 10.7 24 24s-10.7 24-24 24c-48.6 0-88-39.4-88-88v-80h-63c9.5 16.5 15 35.6 15 56 0 61.9-50.1 112-112 112h-224c-61.9 0-112-50.1-112-112 0-30.5 12.2-58.2 32-78.4L64 96c0-35.3 28.7-64 64-64zM112 292.6c10.1-3 20.9-4.6 32-4.6h224c11.1 0 21.9 1.6 32 4.6V256c0-8.8-7.2-16-16-16H112zM214.8 88.8c-2.7-5.4-8.3-8.8-14.3-8.8H128c-8.8 0-16 7.2-16 16v96h154.3L214.7 88.8zM144 336c-35.3 0-64 28.7-64 64s28.7 64 64 64h224c35.3 0 64-28.7 64-64s-28.7-64-64-64zm184 64a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-120 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanBulldozerRegular;
