import React from 'react';

export const NeoPlaySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M560 280c0-24.6-8.7-49.6-27.6-68.2-28-27.6-84.1-77.2-168.4-125.8S208.7 13.5 170.9 3.1C145.3-4 119.3 1 98 13.3s-38.6 32.3-45.2 58C42.9 109.3 28 182.7 28 280c0 91.7 10.8 160.6 18.7 198.9 6.1 29.3 25.1 52.7 49.4 66.7 22.6 13 50.1 18.3 77.2 10.7 38.4-10.8 108.2-34.6 190.8-82.3 84.3-48.6 140.4-98.2 168.4-125.8 18.9-18.6 27.6-43.6 27.6-68.2z"})
);

export default NeoPlaySolid;
