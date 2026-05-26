import React from 'react';

export const LanSpeakersSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160-32c-35.3 0-64 28.7-64 64v352c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V32c0-35.3-28.7-64-64-64zm112 216a104 104 0 1 1 0 208 104 104 0 1 1 0-208m56 104a56 56 0 1 0-112 0 56 56 0 1 0 112 0M240 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88v392c0 35.3 28.7 64 64 64h264c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16z"})
);

export default LanSpeakersSolid;
