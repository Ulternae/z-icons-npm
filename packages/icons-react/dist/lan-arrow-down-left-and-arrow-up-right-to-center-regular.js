import React from 'react';

export const LanArrowDownLeftAndArrowUpRightToCenterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M489.5 57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135V72c0-13.3-10.7-24-24-24s-24 10.7-24 24v144c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-86.1zm-466 398c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V440c0 13.3 10.7 24 24 24s24-10.7 24-24V296c0-13.3-10.7-24-24-24h-144c-13.3 0-24 10.7-24 24s10.7 24 24 24h86.1z"})
);

export default LanArrowDownLeftAndArrowUpRightToCenterRegular;
