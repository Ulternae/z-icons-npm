import React from 'react';

export function LanScannerGunSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 32C50.1 32 0 82.1 0 144s50.1 112 112 112v176c0 26.5 21.5 48 48 48h54.4c23.9 0 44.1-17.6 47.5-41.2L288 256h6.4c23.9 0 44.1-17.6 47.5-41.2l18.3-128c4.1-28.9-18.3-54.8-47.5-54.8zm304 24c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H440c-13.3 0-24 10.7-24 24m0 160c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H440c-13.3 0-24 10.7-24 24m24 216c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-24-288c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H432c-8.8 0-16 7.2-16 16m16 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-16 80c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H432c-8.8 0-16 7.2-16 16"})
  );
}

export default LanScannerGunSolid;
