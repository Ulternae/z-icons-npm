import React from 'react';

export const LanPersonCircleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-32 352h64V167.1c-9.9-4.6-20.8-7.1-32-7.1s-22.1 2.5-32 7.1zm0 48v152c0 13.3-10.7 24-24 24s-24-10.7-24-24V217.6L83.5 302c-7.7 10.8-22.7 13.3-33.5 5.5s-13.2-22.7-5.5-33.5l79.2-110.5C146.8 131.2 184.2 112 224 112s77.2 19.2 100.3 51.5l58.4 81.5c-13.1 9.6-24.9 20.8-35.2 33.3L304 217.6V520c0 13.3-10.7 24-24 24s-24-10.7-24-24V368zm304-112a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 228a20 20 0 1 0 0-40 20 20 0 1 0 0 40m0-180c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"})
);

export default LanPersonCircleExclamationRegular;
