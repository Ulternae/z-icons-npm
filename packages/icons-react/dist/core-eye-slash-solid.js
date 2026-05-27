import React from 'react';

export const CoreEyeSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.2L19 0l45.3-45.3zm-224.7-43.7c-24.3 7.5-49.8 11.7-76.5 11.7C185 480 78.7 374.4 29.6 256c14.3-34.5 33.5-68 56.9-98zM320.3 32C455.5 32 561.8 137.6 611 256c-14.3 34.5-33.6 67.9-56.9 98L243.7 43.7c24.2-7.6 49.8-11.7 76.6-11.7"})
);

export default CoreEyeSlashSolid;
