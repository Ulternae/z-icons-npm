import React from 'react';

export const LanCircleURegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-344c0-13.3-10.7-24-24-24s-24 10.7-24 24v104c0 53 43 96 96 96s96-43 96-96V168c0-13.3-10.7-24-24-24s-24 10.7-24 24v104c0 26.5-21.5 48-48 48s-48-21.5-48-48z"})
);

export default LanCircleURegular;
