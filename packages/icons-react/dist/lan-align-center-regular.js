import React from 'react';

export const LanAlignCenterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M120 40c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24zM24 168c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24zm72 152c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24M24 424c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanAlignCenterRegular;
