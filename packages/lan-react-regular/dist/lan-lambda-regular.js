import React from 'react';

export function LanLambdaRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32C10.8 32 0 42.7 0 56s10.8 24 24 24h108.6c3 0 5.7 1.7 7.1 4.3l10.2 19.6L2 446.5c-5.3 12.2.4 26.3 12.5 31.5s26.3-.3 31.5-12.5l132.4-306.6 151.3 291c9.6 18.5 28.8 30.2 49.7 30.2H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-44.6c-3 0-5.7-1.7-7.1-4.3l-190-365.6C172.6 43.6 153.5 32 132.6 32z"})
  );
}

export default LanLambdaRegular;
