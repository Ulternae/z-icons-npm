import React from 'react';

export const LanArrowUTurnLeftDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m18.8 373.7 136 136c3.1 3.1 8.2 3.1 11.3 0l136-136c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L168.5 484.7V180c0-90.6 73.4-164 164-164s164 73.4 164 164v260c.4 4.3 3.3 8 8 8s7.6-3.7 8-8V180c0-99.4-80.6-180-180-180s-180 80.6-180 180v304.7L30.2 362.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3z"})
);

export default LanArrowUTurnLeftDownThin;
