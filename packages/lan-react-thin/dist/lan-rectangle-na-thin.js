import React from 'react';

export function LanRectangleNAThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 64c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.3 32.3-30.6 57.5-63.7 57.5H64C30.9 448 3.6 422.8.3 390.5L0 384V128c0-35.3 28.7-64 64-64zM64 80c-24.9 0-45.3 18.9-47.8 43.1L16 128v256c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zm226.1 48.3c4.3 1.1 6.8 5.5 5.7 9.8l-64 240c-1.1 4.3-5.5 6.8-9.8 5.7s-6.8-5.5-5.7-9.8l64-240c1.1-4.3 5.5-6.8 9.8-5.7M184 160c4.4 0 8 3.6 8 8v176c0 3.6-2.3 6.7-5.8 7.7s-7.1-.4-9-3.4L80 195.4V344c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-3.6 2.3-6.7 5.8-7.7s7.1.4 9 3.4L176 316.5V168c0-4.4 3.6-8 8-8m200 0c35.3 0 64 28.7 64 64v120c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-96v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V224c0-35.3 28.7-64 64-64m0 16c-26.5 0-48 21.5-48 48v32h96v-32c0-26.5-21.5-48-48-48"})
  );
}

export default LanRectangleNAThin;
