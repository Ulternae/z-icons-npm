import React from 'react';

export function LanShieldQuarteredSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.8 420.7 495.6 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM80 141.4l176-74.6V224H90.1c-6.9-30-9.8-58.5-10.1-82.6m176 303.4V224h166c-18.5 80.5-65.5 172.2-166 220.8"})
  );
}

export default LanShieldQuarteredSolid;
