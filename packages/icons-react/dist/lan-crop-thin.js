import React from 'react';

export const LanCropThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m416 107.3 93.7-93.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L404.7 96H160v16h228.7L112 388.7V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v88H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v280c0 13.3 10.7 24 24 24h232v-16H123.3L400 123.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88z"})
);

export default LanCropThin;
