import React from 'react';

export const LanHoseReelThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 256C80 123.5 187.5 16 320 16s240 107.5 240 240v96h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h8.8L543 496.1c-4 .5-7.1 3.8-7.1 7.9 0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8 0-4.1-3.1-7.5-7.1-7.9L607 368h8.8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40v-96C576 114.6 461.4 0 320 0S64 114.6 64 256s114.6 256 256 256c59.2 0 113.7-20.1 157.1-53.8 3.5-2.7 4.1-7.7 1.4-11.2s-7.7-4.1-11.2-1.4C426.6 477.2 375.5 496 320 496 187.5 496 80 388.5 80 256m511.1 112-14.2 128h-17.7L545 368zM320 408a152 152 0 1 1 0-304 152 152 0 1 1 0 304M152 256a168 168 0 1 0 336 0 168 168 0 1 0-336 0m232 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-64-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160"})
);

export default LanHoseReelThin;
