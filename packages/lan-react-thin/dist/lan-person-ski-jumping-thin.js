import React from 'react';

export function LanPersonSkiJumpingThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 512 544.129',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M408 80a40 40 0 1 1 0-80 40 40 0 1 1 0 80m-56-40a56 56 0 1 0 112 0 56 56 0 1 0-112 0m-208 72h169.4c28.5 0 42.8 34.5 22.6 54.6L202.4 300.3c-1.2 1.2-2 2.7-2.2 4.3l-21 126.2-35.5 18.4.6-3.8 28.6-171.8c2.7-16.4 10.6-31.6 22.3-43.4l72.5-72.5c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9l-118-.1c-8.8 0-16-7.2-16-16s7.2-16 16-16m52.8 309.6 18.6-111.8L347.2 178c30.2-30.2 8.8-81.9-33.9-81.9L144 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h98.7l-58.9 58.9C169.7 233 160.3 251.3 157 271l-28.6 171.8-2.6 15.6L20.3 513c-3.9 2-5.5 6.9-3.4 10.8s6.9 5.5 10.8 3.4l420.7-217.7c29.2-15.1 47.6-45.3 47.6-78.2V224c0-4.4-3.6-8-8-8s-8 3.6-8 8v7.3c0 26.9-15 51.6-38.9 64z"})
  );
}

export default LanPersonSkiJumpingThin;
