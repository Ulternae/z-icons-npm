import React from 'react';

export const LanToggleLargeOffThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288m0 16h256c88.4 0 160-71.6 160-160S504.4 96 416 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160m69.8-16c53.4-25.9 90.2-80.7 90.2-144s-36.8-118.1-90.2-144H416c79.5 0 144 64.5 144 144s-64.5 144-144 144z"})
);

export default LanToggleLargeOffThin;
