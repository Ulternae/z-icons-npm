import React from 'react';

export const LanHoseReelSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 64C182 64 96 150 96 256s86 192 192 192c40.8 0 78.6-12.7 109.7-34.4l36.6 52.5C392.8 495 342.3 512 288 512 146.6 512 32 397.4 32 256S146.6 0 288 0s256 114.6 256 256v96h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-2.3l-9.2 64.4c11.1 2.1 19.5 11.9 19.5 23.6 0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24 0-11.7 8.4-21.5 19.5-23.6l-9.2-64.4H472c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-96c0-106-86-192-192-192m0 282a90 90 0 1 0 0-180 90 90 0 1 0 0 180m0-234a144 144 0 1 1 0 288 144 144 0 1 1 0-288m-48 144a48 48 0 1 1 96 0 48 48 0 1 1-96 0"})
);

export default LanHoseReelSolid;
