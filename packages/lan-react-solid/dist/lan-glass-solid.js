import React from 'react';

export function LanGlassSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4.1 34.3l28.8 403.4c3 41.9 37.8 74.3 79.8 74.3h166.6c42 0 76.8-32.4 79.8-74.3l28.8-403.4c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0zm38.9 128-4.6-64h251.3l-4.6 64z"})
  );
}

export default LanGlassSolid;
