import React from 'react';

export const LanArrowUTurnRightDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m557.7 373.7-136 136c-3.1 3.1-8.2 3.1-11.3 0l-136-136c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L408 484.7V180c0-90.6-73.4-164-164-164S80 89.4 80 180v260c-.4 4.3-3.3 8-8 8s-7.6-3.7-8-8V180C64 80.6 144.6 0 244 0s180 80.6 180 180v304.7l122.3-122.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z"})
);

export default LanArrowUTurnRightDownThin;
