import React from 'react';

export function MinaCloudRainWind({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M19.825 17c4.495-3.16.475-7.73-3.706-7.73C13.296-1.732-3.265 7.368 4.074 15.662m8.45 3.283-1.044-4.89m5.044 6.89-1.044-4.89m-6.956.89-1.044-4.89"})
  );
}

export default MinaCloudRainWind;
