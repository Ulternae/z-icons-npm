import React from 'react';

export const LanArrowLeftArrowRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m502.6 406.6-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l41.4-41.3H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h370.7l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3M9.4 150.6c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 96H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H109.3l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96z"})
);

export default LanArrowLeftArrowRightSolid;
