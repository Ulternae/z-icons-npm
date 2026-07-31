import React from 'react';

export const LanArrowDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M186.3 509.7c3.1 3.1 8.2 3.1 11.3 0l176-176c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L200 484.7V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v476.7L21.7 322.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l176 176z"})
);

export default LanArrowDownThin;
