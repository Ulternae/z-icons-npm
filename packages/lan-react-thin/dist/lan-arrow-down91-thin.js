import React from 'react';

export function LanArrowDown91Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M456 104a56 56 0 1 0-112 0 56 56 0 1 0 112 0m-37.1 69.5c-6 1.6-12.4 2.5-18.9 2.5-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72c0 17.3-5.7 34.2-16.3 47.9l-65.4 85c-2.7 3.5-7.7 4.2-11.2 1.5s-4.2-7.7-1.5-11.2l41.3-53.6zm-14.2 132c2.1 1.5 3.3 3.9 3.3 6.5v152h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h40V323.1l-37.5 12.5c-4.2 1.4-8.7-.9-10.1-5.1s.9-8.7 5.1-10.1l48-16c2.4-.8 5.1-.4 7.2 1.1m-271 172.1c-3.1 3.1-8.2 3.1-11.3 0l-104-104c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l90.3 90.4V40c0-4.4 3.6-8 8-8s8 3.6 8 8v412.7l90.3-90.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-104 104z"})
  );
}

export default LanArrowDown91Thin;
