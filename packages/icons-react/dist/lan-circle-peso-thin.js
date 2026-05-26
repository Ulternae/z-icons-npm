import React from 'react';

export const LanCirclePesoThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m184-128c-4.4 0-8 3.6-8 8v56h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v32h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v112c0 4.4 3.6 8 8 8s8-3.6 8-8v-48h64c41.8 0 77.4-26.7 90.5-64H376c4.4 0 8-3.6 8-8s-3.6-8-8-8h-25.3c.9-5.2 1.3-10.6 1.3-16s-.5-10.8-1.3-16H376c4.4 0 8-3.6 8-8s-3.6-8-8-8h-29.5c-13.2-37.3-48.7-64-90.5-64zm145.3 64H192v-48h64c32.8 0 61 19.7 73.3 48M192 208h142.4c1 5.2 1.6 10.5 1.6 16s-.6 10.8-1.6 16H192zm137.3 48c-12.3 28.2-40.5 48-73.3 48h-64v-48z"})
);

export default LanCirclePesoThin;
