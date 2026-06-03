import React from 'react';

export const LanHeadSideCoughRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M205.3 161.1C190.7 78.6 118.7 16 32 16h-8C10.7 16 0 5.3 0-8s10.7-24 24-24h8c107.7 0 197.5 75.9 219.1 177.1l47 47c14.1 14 21.9 33.1 21.9 53 0 37.7-27.8 68.8-64 74.1V424c0 48.6-39.4 88-88 88H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h144c22.1 0 40-17.9 40-40v-8l-74.4-6.2c-12.2-1-21.6-11.2-21.6-23.4 0-10.8 7.3-20.2 17.8-22.8l78.2-19.5v-48c0-13.3 10.7-24 24-24h13.1c14.9 0 26.9-12.1 26.9-26.9 0-7.1-2.8-14-7.9-19L212 173.9c-3.5-3.5-5.8-7.9-6.7-12.8M96 176a32 32 0 1 1 64 0 32 32 0 1 1-64 0m360 112a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-40 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-64 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48m128 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-24 120a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-40-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanHeadSideCoughRegular;
