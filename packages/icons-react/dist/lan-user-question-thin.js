import React from 'react';

export const LanUserQuestionThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 240a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-240a128 128 0 1 1 0 256 128 128 0 1 1 0-256m-48 320c-88.4 0-160 71.6-160 160v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-97.2 78.8-176 176-176h96c97.2 0 176 78.8 176 176v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-88.4-71.6-160-160-160zm320-208c-25 0-45.2 20.2-45.2 45.2 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-33.8 27.4-61.2 61.2-61.2s61.2 27.4 61.2 61.2c0 31.3-21 47.1-37.4 54.4-9.5 4.3-15.9 12.3-15.9 20.4 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-16.6 12.3-29.2 25.3-35 13.6-6.1 27.9-17.5 27.9-39.8 0-25-20.2-45.2-45.2-45.2zm-16 176a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
);

export default LanUserQuestionThin;
