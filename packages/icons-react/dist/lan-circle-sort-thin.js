import React from 'react';

export const LanCircleSortThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m261.7-141.7c-3.1-3.1-8.2-3.1-11.3 0l-80 80c-2.3 2.3-3 5.7-1.7 8.7s4.2 4.9 7.4 4.9h160c3.2 0 6.2-1.9 7.4-4.9s.6-6.4-1.7-8.7l-80-80zM239 103c9.4-9.4 24.6-9.4 33.9 0l80 80c6.9 6.9 8.9 17.2 5.2 26.2S345.7 224 336 224H176c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2zm11.3 294.6c3.1 3.1 8.2 3.1 11.3 0l80-80c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9h-160c-3.2 0-6.2 1.9-7.4 4.9s-.6 6.4 1.7 8.7l80 80zM273 409c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-6.9-6.9-8.9-17.2-5.2-26.2S166.3 288 176 288h160c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2z"})
);

export default LanCircleSortThin;
