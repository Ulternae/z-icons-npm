import React from 'react';

export const LanArrowRightToBracketRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m209 409 136-136c9.4-9.4 9.4-24.6 0-33.9L209 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l95 95H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h246.1l-95 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM344 80h72c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72c53 0 96-43 96-96V128c0-53-43-96-96-96h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24"})
);

export default LanArrowRightToBracketRegular;
