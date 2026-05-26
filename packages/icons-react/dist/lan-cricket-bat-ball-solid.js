import React from 'react';

export const LanCricketBatBallSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M566.6-22.6c-12.5-12.5-32.8-12.5-45.3 0l-160 160L321.9 98c-18.1-18.1-47.1-18.7-65.9-1.8v191.9h191.9c16.9-18.8 16.3-47.8-1.8-65.9l-39.4-39.4 160-160c12.5-12.5 12.5-32.8 0-45.3zM208 144 45.8 306.2A47.16 47.16 0 0 0 32 339.5C32 434.8 109.2 512 204.5 512c12.5 0 24.5-5 33.3-13.8L400 336H232c-13.3 0-24-10.7-24-24zm256 400a80 80 0 1 0 0-160 80 80 0 1 0 0 160"})
);

export default LanCricketBatBallSolid;
