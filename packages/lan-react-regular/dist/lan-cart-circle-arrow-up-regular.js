import React from 'react';

export function LanCartCircleArrowUpRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 640 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 8C0-5.3 10.7-16 24-16h45.3c27.1 0 50.3 19.4 55.1 46l.4 2h399.9c25.1 0 44 22.9 39.3 47.6l-25.7 133.1c-13.6-3.1-27.8-4.7-42.3-4.7-1.9 0-3.8 0-5.7.1l.1-.5L514.9 80H133.4l29.1 160h227.3c-19.4 12.9-36.2 29.2-49.8 48H171.3l5.1 28.3c2.1 11.4 12 19.7 23.6 19.7h114.9c-5.4 15.2-8.9 31.3-10.3 48H200c-34.8 0-64.6-24.9-70.8-59.1l-52-286.3c-.7-3.8-4-6.6-7.9-6.6H24C10.7 32 0 21.3 0 8m208 408a48 48 0 1 1 0 96 48 48 0 1 1 0-96m288 128a144 144 0 1 1 0-288 144 144 0 1 1 0 288m-67.3-140.7c6.2 6.2 16.4 6.2 22.6 0l28.7-28.7V464c0 8.8 7.2 16 16 16s16-7.2 16-16v-89.4l28.7 28.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56-56c-6.2-6.2-16.4-6.2-22.6 0l-56 56c-6.2 6.2-6.2 16.4 0 22.6"})
  );
}

export default LanCartCircleArrowUpRegular;
