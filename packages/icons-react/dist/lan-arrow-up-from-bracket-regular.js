import React from 'react';

export const LanArrowUpFromBracketRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M241 7c-9.4-9.4-24.6-9.4-33.9 0L71 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l95-95V328c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9l95 95c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zM48 344c0-13.3-10.7-24-24-24S0 330.7 0 344v72c0 53 43 96 96 96h256c53 0 96-43 96-96v-72c0-13.3-10.7-24-24-24s-24 10.7-24 24v72c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48z"})
);

export default LanArrowUpFromBracketRegular;
