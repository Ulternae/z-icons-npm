import React from 'react';

export const LanWaffleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M264 72v80h80v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v48h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48v80h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v80h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48v48c0 4.4-3.6 8-8 8s-8-3.6-8-8v-48h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v48c0 4.4-3.6 8-8 8s-8-3.6-8-8v-48h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8h48v-80H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-80h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8h48v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v48h80V72c0-4.4 3.6-8 8-8s8 3.6 8 8m-96 96v80h80v-80zm0 96v80h80v-80zm96 0v80h80v-80zm0-16h80v-80h-80z"})
);

export default LanWaffleThin;
