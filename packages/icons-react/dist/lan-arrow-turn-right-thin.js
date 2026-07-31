import React from 'react';

export const LanArrowTurnRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 440c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96c0-53 43-96 96-96h388.7L346.4 109.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l152 152c3.1 3.1 3.1 8.2 0 11.3l-152 152c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L484.7 264H96c-44.2 0-80 35.8-80 80z"})
);

export default LanArrowTurnRightThin;
