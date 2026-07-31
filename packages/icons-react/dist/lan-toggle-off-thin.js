import React from 'react';

export const LanToggleOffThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 112c79.5 0 144 64.5 144 144s-64.5 144-144 144H160c-79.5 0-144-64.5-144-144s64.5-144 144-144zm160 144c0-88.4-71.6-160-160-160H160C71.6 96 0 167.6 0 256s71.6 160 160 160h256c88.4 0 160-71.6 160-160m-336 0a80 80 0 1 1-160 0 80 80 0 1 1 160 0m-176 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0"})
);

export default LanToggleOffThin;
