import React from 'react';

export const CoreCloudSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -45.2 640 602.5',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zm-213-32H192.3c-88.4 0-160-71.6-160-160 0-58.6 31.5-109.8 78.6-137.7zM320.3 32c82.7 0 151.9 57 170.8 133.8 67.6 18.7 117.2 80.6 117.2 154.2 0 25.7-6.1 49.9-16.8 71.4L247.6 47.6c22.1-10 46.7-15.6 72.6-15.6z"})
);

export default CoreCloudSlashSolid;
