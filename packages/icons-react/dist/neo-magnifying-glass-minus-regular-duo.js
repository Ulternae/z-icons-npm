import React from 'react';

export const NeoMagnifyingGlassMinusRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M56 224c0 53.9 17 95.3 44.9 123.1S170.1 392 224 392s95.3-17 123.1-44.9S392 277.9 392 224s-17-95.3-44.9-123.1S277.9 56 224 56s-95.3 17-123.1 44.9S56 170.1 56 224m70 0c0-15.5 12.5-28 28-28h140c15.5 0 28 12.5 28 28s-12.5 28-28 28H154c-15.5 0-28-12.5-28-28","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M154 196c-15.5 0-28 12.5-28 28s12.5 28 28 28h140c15.5 0 28-12.5 28-28s-12.5-28-28-28zM61.3 61.3C101.5 21.1 158.1 0 224 0s122.5 21.1 162.7 61.3S448 158.1 448 224s-21.1 122.5-61.3 162.7S289.9 448 224 448s-122.5-21.1-162.7-61.3S0 289.9 0 224 21.1 101.5 61.3 61.3m39.6 39.6C73 128.7 56 170.1 56 224s17 95.3 44.9 123.1S170.1 392 224 392s95.3-17 123.1-44.9S392 277.9 392 224s-17-95.3-44.9-123.1S277.9 56 224 56s-95.3 17-123.1 44.9m313.3 313.3c10.9-10.9 28.7-10.9 39.6 0l98 98c10.9 10.9 10.9 28.7 0 39.6s-28.7 10.9-39.6 0l-98-98c-10.9-10.9-10.9-28.7 0-39.6"})
);

export default NeoMagnifyingGlassMinusRegularDuo;
