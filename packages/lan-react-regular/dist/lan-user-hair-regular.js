import React from 'react';

export function LanUserHairRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M168 368c-66.3 0-120 53.7-120 120 0 13.3-10.7 24-24 24S0 501.3 0 488c0-92.8 75.2-168 168-168h112c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3-53.7-120-120-120zm136-240c0-18-5.9-34.6-16-48l-38.4 28.8C233 121.3 212.8 128 192 128h-48v16c0 44.2 35.8 80 80 80s80-35.8 80-80zm-208 0C96 57.3 153.3 0 224 0s128 57.3 128 128v16c0 70.7-57.3 128-128 128S96 214.7 96 144z"})
  );
}

export default LanUserHairRegular;
