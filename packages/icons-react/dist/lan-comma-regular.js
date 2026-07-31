import React from 'react';

export const LanCommaRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M120 353.4c0-9.6-7.8-17.4-17.4-17.4-8.4 0-15.6 6-17.1 14.3L66.7 453.6l50.4-85.7c1.9-3.3 2.9-7 2.9-10.7zm48 0v3.8c0 12.3-3.3 24.4-9.5 35.1l-57.2 97.2C93.1 503.4 78 512 61.8 512H60c-24.3 0-44-19.7-44-44 0-2.6.2-5.3.7-7.9l21.5-118.4c5.7-31.1 32.7-53.7 64.4-53.7 36.1 0 65.4 29.3 65.4 65.4"})
);

export default LanCommaRegular;
