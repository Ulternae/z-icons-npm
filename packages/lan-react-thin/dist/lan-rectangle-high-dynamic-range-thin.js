import React from 'react';

export function LanRectangleHighDynamicRangeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm80 40v80h96v-80c0-4.4 3.6-8 8-8s8 3.6 8 8v176c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80H80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8s8 3.6 8 8m144 0c0-4.4 3.6-8 8-8h56c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-56c-4.4 0-8-3.6-8-8zm16 168h48c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-48zm144-168c0-4.4 3.6-8 8-8h64c30.9 0 56 25.1 56 56 0 22.9-13.7 42.5-33.4 51.2C498.7 280 512 302.4 512 328v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56h-40v72c0 4.4-3.6 8-8 8s-8-3.6-8-8zm72 88c22.1 0 40-17.9 40-40s-17.9-40-40-40h-56v80z"})
  );
}

export default LanRectangleHighDynamicRangeThin;
