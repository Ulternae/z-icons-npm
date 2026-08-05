import React from 'react';

export function LanEnvelopeCircleCheckThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M119.9 64C89 64 64 89 64 119.9V384c0 35.3 28.7 64 64 64h193.4c-2.4-5.2-4.6-10.6-6.5-16H128c-26.5 0-48-21.5-48-48V159q3 3.15 6.6 5.7l190.5 141.4c10 7.4 21.3 11.9 33 13.5q2.1-7.95 4.8-15.6c-10-.9-19.8-4.5-28.3-10.8L96.1 151.9C86 144.4 80 132.5 80 119.9c0-22 17.9-39.9 39.9-39.9H512c26.5 0 48 21.5 48 48v58.9c5.4 1.9 10.8 4.1 16 6.5V128c0-35.3-28.7-64-64-64zM496 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m60.7-212.5c-3.6-2.6-8.6-1.8-11.2 1.8l-74 101.7-33.4-40.1c-2.8-3.4-7.9-3.9-11.3-1s-3.9 7.9-1 11.3l40 48c1.6 1.9 3.9 3 6.4 2.9s4.8-1.3 6.2-3.3l80-110c2.6-3.6 1.8-8.6-1.8-11.2z"})
  );
}

export default LanEnvelopeCircleCheckThin;
