import React from 'react';

export const LanArrowTrendUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 120c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24v176c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9l-191 191c-9.4 9.4-24.6 9.4-33.9 0L192 257.9 41 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6-.1-34l168-168c9.4-9.4 24.6-9.4 33.9 0L320 318.1 494.1 144H376c-13.3 0-24-10.7-24-24"})
);

export default LanArrowTrendUpRegular;
