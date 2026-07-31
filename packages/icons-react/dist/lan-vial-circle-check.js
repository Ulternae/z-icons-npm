import React from 'react';

export const LanVialCircleCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 16c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v193.4c-11.3 5.2-22 11.4-32 18.6v-20H96v176c0 44.2 35.8 80 80 80 5.7 0 11.3-.6 16.6-1.7 4.5 10.1 9.9 19.8 16 28.9-10.3 3.1-21.3 4.8-32.7 4.8-61.9 0-112-50.1-112-112V32h-16c-8.8 0-16-7.2-16-16zm64 16v160h160V32zm272 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m57.4 83.1c7.1 5.2 8.7 15.2 3.5 22.4l-64 88c-2.8 3.8-7 6.2-11.7 6.5s-9.3-1.3-12.6-4.6l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l26.8 26.8 53-72.9c5.2-7.1 15.2-8.7 22.4-3.5z"})
);

export default LanVialCircleCheck;
