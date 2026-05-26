import React from 'react';

export const LanYSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M58 45.4C47.8 31 27.8 27.7 13.4 38S-4.3 68.2 6 82.6l154 215.7V448c0 17.7 14.3 32 32 32s32-14.3 32-32V298.3L378 82.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-7-44.6 7.4L192 232.9z"})
);

export default LanYSolid;
