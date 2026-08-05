import React from 'react';

export function LanThetaRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 256c0-61.3-18.7-115-46.6-152.2S226.6 48 192 48s-69.4 18.5-97.4 55.8C66.7 141 48 194.7 48 256s18.7 115 46.6 152.2c28 37.3 62.9 55.8 97.4 55.8s69.4-18.5 97.4-55.8C317.3 371 336 317.3 336 256m48 0c0 141.4-86 256-192 256S0 397.4 0 256 86 0 192 0s192 114.6 192 256m-264-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanThetaRegular;
