import React from 'react';

export const LanEarWaveformThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 192c0 19.6-3.2 38.4-9.1 56h1.1c5.2 0 10.3.7 15.1 2.1 5.8-18.3 8.9-37.8 8.9-58.1C480 86 394 0 288 0S96 86 96 192v192c0 70.7 57.3 128 128 128h9.3c32.8 0 63.5-12.5 86.7-33.8V455c-20.9 25.5-52.5 41-86.7 41H224c-61.9 0-112-50.1-112-112V192c0-97.2 78.8-176 176-176s176 78.8 176 176m-272 0c0-53 43-96 96-96s96 43 96 96v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-61.9-50.1-112-112-112s-112 50.1-112 112v40c0 4.4 3.6 8 8 8h16c22.1 0 40 17.9 40 40s-17.9 40-40 40h-16c-4.4 0-8 3.6-8 8s3.6 8 8 8h16c30.9 0 56-25.1 56-56s-25.1-56-56-56h-8zm272 112c0-4.4-3.6-8-8-8s-8 3.6-8 8v224c0 4.4 3.6 8 8 8s8-3.6 8-8zm80 32c0-4.4-3.6-8-8-8s-8 3.6-8 8v160c0 4.4 3.6 8 8 8s8-3.6 8-8zm-160 16c0-4.4-3.6-8-8-8s-8 3.6-8 8v128c0 4.4 3.6 8 8 8s8-3.6 8-8zm240 32c0-4.4-3.6-8-8-8s-8 3.6-8 8v64c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
);

export default LanEarWaveformThin;
