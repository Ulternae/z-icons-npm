import React from 'react';

export function LanTruckFireSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 24c0 13.3 10.7 24 24 24h8v88.6c-19.1 11-32 31.7-32 55.4v48h304V48h248c13.3 0 24-10.7 24-24S565.3 0 552 0H24C10.7 0 0 10.7 0 24m0 264v96c0 35.3 28.7 64 64 64h3.3c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h102.6c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h3.3c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64h-32c0-17.7-14.3-32-32-32s-32 14.3-32 32h-64v136c0 13.3-10.7 24-24 24zm256-160h-64V48h64zM80 48h64v80H80zm336 240v-96h96v96zm-264 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80m232 40a40 40 0 1 1 80 0 40 40 0 1 1-80 0"})
  );
}

export default LanTruckFireSolid;
