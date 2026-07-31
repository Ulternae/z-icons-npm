import React from 'react';

export const LanHammerCrashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -48 640 592',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M440.2-40V8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-48c0-4.4 3.6-8 8-8s8 3.6 8 8m-8 312c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8s-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m192-128c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8h48c4.4 0 8 3.6 8 8M568 8.2c3.1 3.1 3.1 8.2 0 11.3l-34 34c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l33.9-34c3.1-3.1 8.2-3.1 11.3 0zm-34 226.3 34 34c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-33.9-33.9c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0zM48.1 141.3V224c0 8.8 7.2 16 16 16h272c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H141.3c-4.2 0-8.3 1.7-11.3 4.7l-77.2 77.2c-3 3-4.7 7.1-4.7 11.3zm70.6-99.9c6-6 14.1-9.4 22.6-9.4H336c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32h-80v256c0 17.7-14.3 32-32 32s-32-14.3-32-32V256H64c-17.7 0-32-14.3-32-32v-82.7c0-8.5 3.4-16.6 9.4-22.6zM208.1 256v256c0 8.8 7.2 16 16 16s16-7.2 16-16V256z"})
);

export default LanHammerCrashThin;
