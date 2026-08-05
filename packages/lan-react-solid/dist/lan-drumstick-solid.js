import React from 'react';

export function LanDrumstickSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M150.6 287.8c6-6 9.4-14.1 9.4-22.6V176C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176h-89.2c-8.5 0-16.6 3.4-22.6 9.4l-26.8 26.8c-12.3 12.3-11.4 32.5-7.2 49.4 1.1 4.6 1.8 9.5 1.8 14.5 0 33.1-26.9 60-60 60s-60-26.9-60-60c0-6.3-5.7-12-12-12-33.1 0-60-26.9-60-60s26.9-60 60-60c5 0 9.8.6 14.5 1.8 16.9 4.2 37.1 5.2 49.4-7.2l26.8-26.8z"})
  );
}

export default LanDrumstickSolid;
