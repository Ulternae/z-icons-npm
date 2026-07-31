import React from 'react';

export const NeoShieldSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 504 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M228.9 553.8c-27.2-10.3-84.7-38.1-135.4-102C42.5 387.6 0 288.9 0 140c0-26.2 12.5-52.6 36.9-67.3 49.8-30.3 102.8-48.3 142.8-58.8C202.5 8 227.9 0 252 0s49.5 8 72.3 13.9c40 10.5 92.9 28.5 142.8 58.7 24.3 14.8 36.9 41.1 36.9 67.3 0 148.9-42.5 247.6-93.5 311.8-50.7 63.9-108.2 91.7-135.4 102-15 5.7-31.2 5.7-46.2 0z"})
);

export default NeoShieldSolid;
