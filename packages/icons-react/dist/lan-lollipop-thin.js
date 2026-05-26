import React from 'react';

export const LanLollipopThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 368c-51.8 0-98.4-22.4-130.6-58.1C84.8 326.3 113.3 336 144 336h16c70.7 0 128-57.3 128-128v-16c0-53-43-96-96-96s-96 43-96 96c0 30.9 25.1 56 56 56s56-25.1 56-56v-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-44.2 35.8-80 80-80s80 35.8 80 80v16c0 61.9-50.1 112-112 112h-16c-70.7 0-128-57.3-128-128C16 94.8 94.8 16 192 16s176 78.8 176 176-78.8 176-176 176M0 192c0 106 86 192 192 192 50.1 0 95.8-19.2 130-50.7.1.1.2.2.3.4l176 176c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-176-176c-.1-.1-.2-.2-.4-.3 31.5-34.2 50.7-79.9 50.7-130 0-106-86-192-192-192S0 86 0 192"})
);

export default LanLollipopThin;
