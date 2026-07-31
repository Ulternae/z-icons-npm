import React from 'react';

export const LanBandAid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 128v256h64c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zm-32 0H160v256h256zM128 384V128H64c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32zm0-288h384c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm112 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanBandAid;
