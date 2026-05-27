import React from 'react';

export const CoreWifiSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.2L19 0l45.3-45.3zm-257.1-76.1L320.3 480l-86.8-86.8c13.5-16.5 31.6-29.1 52.4-35.8zM250.5 322c-18.5 10.2-34.5 24.4-46.8 41.4L135.3 295c13.3-16 28.7-30.4 45.7-42.5zM146.7 218.2c-16.6 12.6-31.9 26.9-45.4 42.8l-68-68c13.8-15.6 28.9-30 45.1-43.1l68.4 68.4zM320.3 64c114.1 0 216.7 49.8 287 128.9l-68 68c-44-51.5-105.9-87.3-176.1-97.8l-95.6-95.5c17.2-2.4 34.8-3.6 52.7-3.6"})
);

export default CoreWifiSlashSolid;
