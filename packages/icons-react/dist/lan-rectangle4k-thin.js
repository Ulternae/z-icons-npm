import React from 'react';

export const LanRectangle4kThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm40 96c-4.4 0-8 3.6-8 8v48c0 30.9 25.1 56 56 56h64v72c0 4.4 3.6 8 8 8s8-3.6 8-8V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v88h-64c-22.1 0-40-17.9-40-40v-48c0-4.4-3.6-8-8-8m184 0c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8v-80h24c44.2 0 80 35.8 80 80 0 4.4 3.6 8 8 8s8-3.6 8-8c0-39.4-23.7-73.2-57.6-88 33.9-14.8 57.6-48.6 57.6-88 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 44.2-35.8 80-80 80h-24v-80c0-4.4-3.6-8-8-8"})
);

export default LanRectangle4kThin;
