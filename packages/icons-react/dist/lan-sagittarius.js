import React from 'react';

export const LanSagittarius = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M432 32c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.6L214.6 288l68.7 68.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L192 310.6 27.3 475.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L169.4 288l-68.7-68.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7L393.4 64H272c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
);

export default LanSagittarius;
