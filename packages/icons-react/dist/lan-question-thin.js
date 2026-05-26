import React from 'react';

export const LanQuestionThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 160C16 80.5 80.5 16 160 16s144 64.5 144 144c0 58.5-34.9 108.9-85.1 131.5-33.2 14.9-66.9 44.4-66.9 84.5v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-30.5 26.2-55.9 57.4-69.9 55.7-25 94.6-81 94.6-146.1C320 71.6 248.4 0 160 0S0 71.6 0 160c0 4.4 3.6 8 8 8s8-3.6 8-8m144 352c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16"})
);

export default LanQuestionThin;
