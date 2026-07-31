import React from 'react';

export const LanCircleHalfStrokeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M280 462.6V49.3c103.6 12 184 99.9 184 206.7s-80.4 194.7-184 206.6m-48 0C128.4 450.7 48 362.8 48 256S128.4 61.3 232 49.4v413.3zm24 49.4a256 256 0 1 0 0-512 256 256 0 1 0 0 512"})
);

export default LanCircleHalfStrokeRegular;
