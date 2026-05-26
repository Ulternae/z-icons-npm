import React from 'react';

export const LanJeansRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M73.7 35.5C79.7 5.6 106-16 136.5-16h239.7C406.7-16 433 5.6 439 35.5l79.5 399.7c6.9 34.8-15.8 68.6-50.7 75.3l-95.2 18.3c-34 6.5-67-15.1-74.5-48.9l-41.8-186.1L214.7 480c-7.6 33.8-40.6 55.4-74.5 48.9l-95.3-18.3c-34.8-6.8-57.6-40.6-50.7-75.4zm62.8-3.5c-7.6 0-14.2 5.4-15.7 12.9L117 64h278.7l-3.8-19.1c-1.5-7.5-8.1-12.9-15.7-12.9zm168.2 80h-24.3v69.3l64.5 288.2c1.9 8.4 10.1 13.8 18.6 12.2l95.2-18.3c8.7-1.7 14.4-10.1 12.7-18.8l-47-236.6h-16c-54.7 0-99.6-42.3-103.7-96m48.3 0c3.9 27.1 27.2 48 55.4 48h6.4l-9.5-48zm-120.6 0H208c-4.1 53.7-49 96-103.7 96h-16l-47 236.6c-1.7 8.7 4 17.2 12.7 18.8l95.2 18.3c8.5 1.6 16.7-3.8 18.6-12.2l64.5-288.2V112zm-124.9 0L98 160h6.4c28.2 0 51.6-20.9 55.4-48z"})
);

export default LanJeansRegular;
