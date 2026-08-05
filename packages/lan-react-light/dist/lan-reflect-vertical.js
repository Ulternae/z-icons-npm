import React from 'react';

export function LanReflectVertical({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 240h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16m208 123.3L107.3 480h233.4zM71 471l136-136c9.4-9.4 24.6-9.4 33.9 0L377 471c6.9 6.9 8.9 17.2 5.2 26.2S369.7 512 360 512H88c-9.7 0-18.5-5.8-22.2-14.8S64.2 477.9 71 471m153-322.3L340.7 32H107.3zM71 41c-6.9-6.9-8.9-17.2-5.2-26.2S78.3 0 88 0h272c9.7 0 18.5 5.8 22.2 14.8s1.6 19.3-5.2 26.2L241 177c-9.4 9.4-24.6 9.4-33.9 0z"})
  );
}

export default LanReflectVertical;
