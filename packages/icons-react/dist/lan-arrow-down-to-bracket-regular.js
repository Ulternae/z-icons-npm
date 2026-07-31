import React from 'react';

export const LanArrowDownToBracketRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M377 209 241 345c-9.4 9.4-24.6 9.4-33.9 0L71 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l95 95V24c0-13.3 10.7-24 24-24s24 10.7 24 24v246.1l95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM48 344v72c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48v-72c0-13.3 10.7-24 24-24s24 10.7 24 24v72c0 53-43 96-96 96H96c-53 0-96-43-96-96v-72c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanArrowDownToBracketRegular;
