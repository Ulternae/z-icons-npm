import React from 'react';

export const LanArrowLeftToBracketRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M303 409 167 273c-9.4-9.4-9.4-24.6 0-33.9L303 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-95 95H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H241.9l95 95c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0zM168 80H96c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24"})
);

export default LanArrowLeftToBracketRegular;
