import React from 'react';

export const LanHeadSideHeadphonesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 86.6V9.3C67.5 36.8 0 122.5 0 224c0 54 19.1 103.5 50.9 142.2 8 9.7 13.1 21.6 13.1 34.2V464c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-7.2c0-5.1 4.5-8.8 9.7-8.8H368c35.3 0 64-28.7 64-64v-48c0-8.8 7.2-16 16-16h1c26 0 47-21 47-47 0-11-3.9-21.6-10.9-30.1L449.3 200c-2-2.4-3.2-5.3-3.6-8.3C431.5 93.7 354 16.3 256 2.3v84.3c0 12.4 7.4 23.3 17.4 30.5 28.2 20.3 46.6 53.5 46.6 90.9 0 61.9-50.1 112-112 112S96 269.9 96 208c0-37.4 18.4-70.6 46.6-90.9 10-7.2 17.4-18.2 17.4-30.5M208 256a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanHeadSideHeadphonesSolid;
