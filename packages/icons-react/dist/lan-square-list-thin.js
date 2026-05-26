import React from 'react';

export const LanSquareListThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 128c0 4.4 3.6 8 8 8h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H168c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H168c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H168c-4.4 0-8 3.6-8 8M96 144a16 16 0 1 0 0 32 16 16 0 1 0 0-32m16 112a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0 32 16 16 0 1 0 0-32"})
);

export default LanSquareListThin;
