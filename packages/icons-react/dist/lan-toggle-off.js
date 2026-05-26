import React from 'react';

export const LanToggleOff = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H160c-70.7 0-128-57.3-128-128s57.3-128 128-128zm160 128c0-88.4-71.6-160-160-160H160C71.6 96 0 167.6 0 256s71.6 160 160 160h256c88.4 0 160-71.6 160-160m-352 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-160 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0"})
);

export default LanToggleOff;
