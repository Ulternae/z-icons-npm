import React from 'react';

export const LanArrowUTurnDownRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m373.7 525.7 136-136c3.1-3.1 3.1-8.2 0-11.3l-136-136c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 376H180c-90.6 0-164-73.4-164-164S89.4 48 180 48h260c4.3-.4 8-3.3 8-8s-3.7-7.6-8-8H180C80.6 32 0 112.6 0 212s80.6 180 180 180h304.7L362.4 514.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z"})
);

export default LanArrowUTurnDownRightThin;
