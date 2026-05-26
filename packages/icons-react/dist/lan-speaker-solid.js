import React from 'react';

export const LanSpeakerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm304 272a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-112-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0-112a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanSpeakerSolid;
