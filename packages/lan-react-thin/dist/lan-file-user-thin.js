import React from 'react';

export function LanFileUserThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M197.5 16q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zm156.4 136.6c2.3 2.3 4.3 4.8 6.1 7.4h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm80 288a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M82 439.1c-1.1 4.7 2.7 8.9 7.5 8.9 4 0 7.4-3 8.5-6.9 6.5-23.7 28.2-41.1 54-41.1h80c25.8 0 47.5 17.4 54 41.1 1.1 3.9 4.4 6.9 8.5 6.9 4.8 0 8.6-4.2 7.5-8.9-7.6-31.6-36.1-55.1-70-55.1h-80c-33.9 0-62.4 23.5-70 55.1"})
  );
}

export default LanFileUserThin;
