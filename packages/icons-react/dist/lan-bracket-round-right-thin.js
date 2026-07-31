import React from 'react';

export const LanBracketRoundRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32.8 36.4c-2 4-.4 8.8 3.6 10.7 23.1 11.5 58.2 36.1 87.4 71.7S176 200.7 176 255.9 153 357.4 123.8 393c-29.2 35.7-64.3 60.2-87.4 71.7-4 2-5.6 6.8-3.6 10.7s6.8 5.6 10.7 3.6c24.9-12.5 61.8-38.3 92.6-75.9s55.8-87.3 55.8-147.3-25-109.7-55.8-147.3C105.3 71 68.4 45.1 43.5 32.6c-4-2-8.8-.4-10.7 3.6z"})
);

export default LanBracketRoundRightThin;
