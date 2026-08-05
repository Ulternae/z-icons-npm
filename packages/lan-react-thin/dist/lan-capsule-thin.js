import React from 'react';

export function LanCapsuleThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M303 346.3 133.7 177l-82.6 82.5C28.6 282 16 312.5 16 344.2 16 410.4 69.6 464 135.8 464c31.7 0 62.2-12.6 84.7-35.1zm11.3-11.3 82.6-82.6c22.5-22.4 35.1-52.9 35.1-84.6C432 101.6 378.4 48 312.2 48c-31.7 0-62.2 12.6-84.7 35.1L145 165.7zm93.9-71.3L231.8 440.2c-25.5 25.5-60 39.8-96 39.8C60.8 480 0 419.2 0 344.2c0-36 14.3-70.5 39.8-96L216.2 71.8c25.5-25.5 60-39.8 96-39.8 75 0 135.8 60.8 135.8 135.8 0 36-14.3 70.5-39.8 96z"})
  );
}

export default LanCapsuleThin;
