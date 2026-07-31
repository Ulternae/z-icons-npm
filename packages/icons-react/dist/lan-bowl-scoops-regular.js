import React from 'react';

export const LanBowlScoopsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 48c33.5 0 62.2 20.6 74.1 49.9-29.3 5.1-55.2 20.1-74.1 41.5-18.9-21.4-44.8-36.4-74.1-41.5C161.8 68.7 190.5 48 224 48m0-48C163.2 0 112.3 42.4 99.2 99.2 47.5 111.1 7.7 154.4 1 208h48.6c7.4-36.5 39.7-64 78.4-64 30.1 0 56.3 16.6 70 41.2-2.3 7.3-4 15-5 22.8h48.6c7.4-36.5 39.7-64 78.4-64s71 27.5 78.4 64H447c-6.7-53.6-46.5-96.9-98.3-108.8-13-56.8-64-99.2-124.8-99.2zM24 256c-13.3 0-24 10.7-24 24v8c0 71.7 55.5 130.4 125.9 135.6l-20.4 56.2c-2.7 7.4-1.6 15.6 2.9 22S120.2 512 128 512h192c7.8 0 15.2-3.8 19.7-10.2s5.6-14.6 2.9-22l-20.4-56.2C392.5 418.4 448 359.7 448 288v-8c0-13.3-10.7-24-24-24zm112 120c-43.1 0-79-31-86.5-72h349.1c-7.5 41-43.4 72-86.6 72h-24c-7.8 0-15.2 3.8-19.7 10.2s-5.6 14.6-2.9 22l20.3 55.8H162.2l20.3-55.8c2.7-7.4 1.6-15.6-2.9-22S167.8 376 160 376z"})
);

export default LanBowlScoopsRegular;
