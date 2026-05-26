import React from 'react';

export const LanToggleLargeOnThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 112a144 144 0 1 0 0 288 144 144 0 1 0 0-288m0 304H160C71.6 416 0 344.4 0 256S71.6 96 160 96h256c88.4 0 160 71.6 160 160s-71.6 160-160 160m-69.8-16c-53.4-25.9-90.2-80.7-90.2-144s36.8-118.1 90.2-144H160c-79.5 0-144 64.5-144 144s64.5 144 144 144z"})
);

export default LanToggleLargeOnThin;
