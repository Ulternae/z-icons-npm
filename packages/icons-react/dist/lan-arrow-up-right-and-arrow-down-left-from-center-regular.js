import React from 'react';

export const LanArrowUpRightAndArrowDownLeftFromCenterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M295 183c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V168c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H344c-13.3 0-24 10.7-24 24s10.7 24 24 24h86.1l-135 135zm-78 146c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L48 430.1V344c0-13.3-10.7-24-24-24S0 330.7 0 344v144c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H81.9l135-135z"})
);

export default LanArrowUpRightAndArrowDownLeftFromCenterRegular;
