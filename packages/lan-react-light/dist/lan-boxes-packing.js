import React from 'react';

export function LanBoxesPacking({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M416 32h64c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32h-84.6c-3.4 11.6-8.7 22.3-15.4 32h100c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64v80h32V64c0-17.7 14.3-32 32-32h64v72c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24zm-32 0v64h-64V32zM64 320h256v128c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm-32-8v136c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V312c9.7-7.3 16-18.9 16-32v-48c0-22.1-17.9-40-40-40H56c-22.1 0-40 17.9-40 40v48c0 13.1 6.3 24.7 16 32m24-24c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8z"})
  );
}

export default LanBoxesPacking;
