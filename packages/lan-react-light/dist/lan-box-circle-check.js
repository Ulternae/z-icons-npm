import React from 'react';

export function LanBoxCircleCheck({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 160v48.7c11 .9 21.6 2.7 32 5.4v-65.5c0-13.3-4.2-26.3-11.9-37.2l-49-68.6c-12-16.8-31.4-26.8-52-26.8H144.9c-20.7 0-40.1 10-52.1 26.8l-48.9 68.5C36.2 122.2 32 135.2 32 148.5V416c0 35.3 28.7 64 64 64h161.4c-4.7-10.2-8.5-20.9-11.4-32H96c-17.7 0-32-14.3-32-32V160zM71.3 128l47.6-66.6c6-8.4 15.7-13.4 26-13.4H240v80zm200.7 0V48h95.1c10.3 0 20 5 26 13.4l47.6 66.6zm160 160a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m57.4-204.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.4z"})
  );
}

export default LanBoxCircleCheck;
