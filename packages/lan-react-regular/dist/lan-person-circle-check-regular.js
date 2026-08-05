import React from 'react';

export function LanPersonCircleCheckRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 640 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-32 352h64V167.1c-9.9-4.6-20.8-7.1-32-7.1s-22.1 2.5-32 7.1zm0 48v152c0 13.3-10.7 24-24 24s-24-10.7-24-24V217.6L83.5 302c-7.7 10.8-22.7 13.3-33.5 5.5s-13.2-22.7-5.5-33.5l79.2-110.5C146.8 131.2 184.2 112 224 112s77.2 19.2 100.3 51.5l58.4 81.5c-13.1 9.6-24.9 20.8-35.2 33.3L304 217.6V520c0 13.3-10.7 24-24 24s-24-10.7-24-24V368zm160 32a144 144 0 1 1 288 0 144 144 0 1 1-288 0m201.4-60.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.3"})
  );
}

export default LanPersonCircleCheckRegular;
