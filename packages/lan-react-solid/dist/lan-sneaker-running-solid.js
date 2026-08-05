import React from 'react';

export function LanSneakerRunningSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M216.2 432c13.3 0 24 10.7 24 24s-10.7 24-24 24h-160c-13.3 0-24-10.7-24-24s10.7-24 24-24zm209.4-11.8c12.2 7 26 10.7 40 10.7h173.8c-4.3 27.8-28.3 49.1-57.4 49.1H451.2c-22.9 0-45.4-6.2-65.1-17.8L114.7 301.8c-26-15.4-35.7-47.8-23.3-74.6zM104.2 352c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24zM227.1 32c16.1 0 29.1 13 29.1 29.1v21.7c0 25 20.3 45.2 45.2 45.2 12 0 23.5-4.8 32-13.2l38-38c8.2-8.2 19.3-12.8 30.8-12.8 18 0 34.2 11.1 40.7 27.9l13.9 36.1h-48.6c-13.3 0-24 10.7-24 24s10.7 24 24 24h67.1l18.5 48h-53.6c-13.3 0-24 10.7-24 24s10.7 24 24 24h72c64.9 0 118.5 48.3 126.8 110.9H465.5c-5.6 0-11.1-1.5-16-4.3L115.9 185.9l83.9-139.8C205 37.4 214.5 32 224.7 32z"})
  );
}

export default LanSneakerRunningSolid;
