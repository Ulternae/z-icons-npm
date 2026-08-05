import React from 'react';

export function LanArrowUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M203.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-176 176c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 54.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6l148.7 148.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"})
  );
}

export default LanArrowUp;
