import React from 'react';

export const LanRectangle4k = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm48 96c-8.8 0-16 7.2-16 16v56c0 30.9 25.1 56 56 56h56v48c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v80h-56c-13.3 0-24-10.7-24-24v-56c0-8.8-7.2-16-16-16m176 0c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-64h16c35.3 0 64 28.7 64 64 0 8.8 7.2 16 16 16s16-7.2 16-16c0-33.4-17-62.8-42.9-80 25.9-17.2 42.9-46.6 42.9-80 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 35.3-28.7 64-64 64h-16v-64c0-8.8-7.2-16-16-16"})
);

export default LanRectangle4k;
