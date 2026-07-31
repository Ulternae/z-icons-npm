import React from 'react';

export const LanTruckFireThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 8c0-4.4 3.6-8 8-8h560c4.4 0 8 3.6 8 8s-3.6 8-8 8H320v112h64.6c3.9-27.1 27.2-48 55.4-48s51.6 20.9 55.4 48H512c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64h-3.3c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H236.7c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H64c-35.3 0-64-28.7-64-64V192c0-29.8 20.4-54.9 48-62V16H8c-4.4 0-8-3.6-8-8m440 88c-19.4 0-35.5 13.7-39.2 32h78.4c-3.7-18.3-19.8-32-39.2-32m-136 32V16H192v112zM64 16v112h112V16zm320 128H64c-26.5 0-48 21.5-48 48v64h368zm16 0v112h160v-64c0-26.5-21.5-48-48-48zm160 128H16v112c0 26.5 21.5 48 48 48h.4c-.2-2.6-.4-5.3-.4-8 0-48.6 39.4-88 88-88s88 39.4 88 88c0 2.7-.1 5.4-.4 8h96.7c-.2-2.6-.4-5.3-.4-8 0-48.6 39.4-88 88-88s88 39.4 88 88c0 2.7-.1 5.4-.4 8h.4c26.5 0 48-21.5 48-48V272zM224 424a72 72 0 1 0-144 0 72 72 0 1 0 144 0m200 72a72 72 0 1 0 0-144 72 72 0 1 0 0 144"})
);

export default LanTruckFireThin;
