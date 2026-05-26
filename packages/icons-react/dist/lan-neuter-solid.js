import React from 'react';

export const LanNeuterSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 176a112 112 0 1 1 224 0 112 112 0 1 1-224 0m143.9 173.1c82-15 144.1-86.8 144.1-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144.1 173.1-.1 1-.1 1.9-.1 2.9v160c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-1 0-1.9-.1-2.9"})
);

export default LanNeuterSolid;
