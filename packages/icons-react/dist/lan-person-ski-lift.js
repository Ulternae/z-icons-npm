import React from 'react';

export const LanPersonSkiLift = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c8.8 0 16 7.2 16 16v194.8c-1.9.3-3.7.6-5.6 1.1l-26.4 6.6V16c0-8.8 7.2-16 16-16M104.8 177.7c7.9-4 17.5-.7 21.5 7.2l42.3 84.5L274.2 243c15.1-3.8 29.8 7.7 29.8 23.3v136.5l150.7-59.7c15.3-6 25.3-20.8 25.3-37.2V304c0-8.8 7.2-16 16-16s16 7.2 16 16v1.9c0 29.5-18 56.1-45.5 66.9l-348.6 138c-8.2 3.3-17.5-.8-20.8-9s.8-17.5 9-20.8L272 415.3v-139l-95.7 23.9c-14.6 3.6-29.7-3.3-36.4-16.7l-42.2-84.3c-4-7.9-.7-17.5 7.2-21.5zM9.1 161.6c8-3.8 17.5-.5 21.3 7.5L103.3 321c10 20.9 33.5 31.6 55.9 25.5l36.5-10c8.5-2.3 17.3 2.7 19.6 11.2s-2.7 17.3-11.2 19.6l-36.5 10c-37.3 10.2-76.5-7.7-93.2-42.6L1.6 182.9c-3.8-8-.5-17.5 7.5-21.3M128 88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0"})
);

export default LanPersonSkiLift;
