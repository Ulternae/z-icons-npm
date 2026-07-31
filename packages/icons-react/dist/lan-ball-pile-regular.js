import React from 'react';

export const LanBallPileRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -8 640 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-136 0a88 88 0 1 1 176 0 88 88 0 1 1-176 0m32 176a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-136 0a88 88 0 1 1 176 0 88 88 0 1 1-176 0m296 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-136a88 88 0 1 1 0 176 88 88 0 1 1 0-176m-56 264a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-136 0a88 88 0 1 1 176 0 88 88 0 1 1-176 0m-120 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-136a88 88 0 1 1 0 176 88 88 0 1 1 0-176m464 88a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-136 0a88 88 0 1 1 176 0 88 88 0 1 1-176 0"})
);

export default LanBallPileRegular;
