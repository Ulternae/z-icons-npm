import React from 'react';

export const LanCircleSort = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-124.7L195.3 192h121.4zM239 103c9.4-9.4 24.6-9.4 33.9 0l80 80c6.9 6.9 8.9 17.2 5.2 26.2S345.7 224 336 224H176c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2zm-43.7 217 60.7 60.7 60.7-60.7zm77.7 89c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-6.9-6.9-8.9-17.2-5.2-26.2S166.3 288 176 288h160c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2z"})
);

export default LanCircleSort;
