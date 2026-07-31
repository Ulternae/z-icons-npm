import React from 'react';

export const LanArrowLeftFromBracketRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M344 432c-13.3 0-24 10.7-24 24s10.7 24 24 24h72c53 0 96-43 96-96V128c0-53-43-96-96-96h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48zM7 239c-9.4 9.4-9.4 24.6 0 33.9L143 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-95-95H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H81.9l95-95c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z"})
);

export default LanArrowLeftFromBracketRegular;
