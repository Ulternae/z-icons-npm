import React from 'react';

export function LanEnvelopeCircleCheck({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M122.5 64C90.2 64 64 90.2 64 122.5c0 1.9.1 3.7.3 5.5H64v256c0 35.3 28.7 64 64 64h193.4c-4.7-10.2-8.5-20.9-11.4-32H128c-17.7 0-32-14.3-32-32V175.6l176.7 129.6c11.3 8.3 24.1 13.2 37.4 14.9 2.8-10.9 6.5-21.4 11.1-31.4-10.3.2-20.7-2.9-29.5-9.3L106.8 143.8c-6.8-5-10.8-12.9-10.8-21.4 0-14.6 11.9-26.5 26.5-26.5L512 96c17.7 0 32 14.3 32 32v54c11.1 2.9 21.8 6.7 32 11.4V128c0-35.3-28.7-64-64-64zM496 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m57.4-204.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.4z"})
  );
}

export default LanEnvelopeCircleCheck;
