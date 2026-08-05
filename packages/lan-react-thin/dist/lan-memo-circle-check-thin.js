import React from 'react';

export function LanMemoCircleCheckThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 16h256c26.5 0 48 21.5 48 48v146.7c5.3-.9 10.6-1.6 16-2V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h180c-3.7-5.1-7.2-10.5-10.3-16H96c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m32 120c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8m304-56a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m60.7-212.5c-3.6-2.6-8.6-1.8-11.2 1.8l-74 101.7-33.4-40.1c-2.8-3.4-7.9-3.9-11.3-1s-3.9 7.9-1 11.3l40 48c1.6 1.9 3.9 3 6.4 2.9s4.8-1.3 6.2-3.3l80-110c2.6-3.6 1.8-8.6-1.8-11.2z"})
  );
}

export default LanMemoCircleCheckThin;
