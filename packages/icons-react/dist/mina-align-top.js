import React from 'react';

export const MinaAlignTop = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M10 18v-8c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 7 7.932 7 7 7s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 8.602 4 9.068 4 10v8c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 21 6.068 21 7 21s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.398 10 18.932 10 18m10-4v-4c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C18.398 7 17.932 7 17 7s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C14 8.602 14 9.068 14 10v4c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C15.602 17 16.068 17 17 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 15.398 20 14.932 20 14m1-11H3"})
);

export default MinaAlignTop;
