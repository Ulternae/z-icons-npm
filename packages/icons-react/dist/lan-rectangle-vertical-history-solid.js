import React from 'react';

export const LanRectangleVerticalHistorySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 0c-35.3 0-64 28.7-64 64v384c0 35.3 28.7 64 64 64h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM104 72v368c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-13.3-10.7-24-24-24s-24 10.7-24 24M0 120v272c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24S0 106.7 0 120"})
);

export default LanRectangleVerticalHistorySolid;
