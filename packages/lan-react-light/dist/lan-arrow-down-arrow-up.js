import React from 'react';

export function LanArrowDownArrowUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M484.7 139.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L368 54.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6zm-256 233.4L144 457.4V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v441.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"})
  );
}

export default LanArrowDownArrowUp;
