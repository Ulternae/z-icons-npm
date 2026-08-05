import React from 'react';

export function LanCoffeePotSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 128c0-17.7 14.3-32 32-32h12.8l34 84.9C95 215.9 64 272.3 64 336v8c0 55.5 34.6 99.4 55.9 121.2 9.9 10.2 23.9 14.8 38.1 14.8h260c14.2 0 28.1-4.7 38.1-14.8C477.3 443.5 512 399.5 512 344v-8c0-63.7-31-120.1-78.8-155.1l44.9-112.1c1.3-3.2 1.9-6.6 1.9-10C480 44 468 32 453.2 32H96C43 32 0 75 0 128v64c0 17.7 14.3 32 32 32s32-14.3 32-32zm65 192c5.2-41.4 30.1-76.6 65-96h188c34.9 19.4 59.8 54.6 65 96z"})
  );
}

export default LanCoffeePotSolid;
