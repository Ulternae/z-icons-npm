import React from 'react';

export const LanArrowUp19 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M409.6 35.2c-4-3-9.2-4-14-2.6l-56 16c-8.5 2.4-13.4 11.3-11 19.8s11.3 13.4 19.8 11L384 69.2V192h-40c-8.8 0-16 7.2-16 16s7.2 16 16 16h112c8.8 0 16-7.2 16-16s-7.2-16-16-16h-40V48c0-5-2.4-9.8-6.4-12.8M352 336a48 48 0 1 1 96 0 48 48 0 1 1-96 0m53.9 79.8-27.1 39.1c-5 7.3-3.2 17.2 4 22.3s17.2 3.2 22.3-4l58.3-84.3c10.7-15.5 16.5-34 16.5-52.8 0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80c2 0 4-.1 5.9-.2zM139.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L112 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"})
);

export default LanArrowUp19;
