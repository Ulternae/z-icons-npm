import React from 'react';

export const LanCircleEnvelopeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-14.9-244.1c4.5 2.7 9.6 4.1 14.9 4.1s10.4-1.4 14.9-4.1l100.7-60.4c7.7-4.6 12.4-12.9 12.4-21.9 0-14.1-11.4-25.5-25.5-25.5H153.6c-14.1 0-25.5 11.4-25.5 25.5 0 9 4.7 17.3 12.4 21.9l100.7 60.4zM384 237.3l-96.7 58C277.9 301 267 304 256 304s-21.9-3-31.3-8.7l-96.7-58V320c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32z"})
);

export default LanCircleEnvelopeRegular;
