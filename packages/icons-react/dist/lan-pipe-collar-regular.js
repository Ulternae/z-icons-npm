import React from 'react';

export const LanPipeCollarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464c47.5 0 91.9-12.9 130-35.4l.7.7c25 25 65.5 25 90.5 0s25-65.5 0-90.5l-.7-.7c22.5-38.1 35.4-82.6 35.4-130s-12.9-91.9-35.4-130l.7-.7c25-25 25-65.5 0-90.5s-65.5-25-90.5 0l-.7.7C347.9 12.9 303.5 0 256 0s-91.9 12.9-130 35.4l-.7-.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5l.7.7C12.9 164.1 0 208.5 0 256s12.9 91.9 35.4 130l-.7.7c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l.7-.7c38.1 22.5 82.6 35.4 130 35.4zM144 256a112 112 0 1 1 224 0 112 112 0 1 1-224 0m272 0a160 160 0 1 0-320 0 160 160 0 1 0 320 0"})
);

export default LanPipeCollarRegular;
