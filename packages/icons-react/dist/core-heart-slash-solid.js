import React from 'react';

export const CoreHeartSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -45.2 640 602.5',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zm-236.3-55.3-65 65L97.6 299.1C52.8 254.2 40.9 189 61.8 133.3zM331.3 68.9c61.5-52 153.6-49 211.5 8.9 61.1 61.1 61.1 160.2 0 221.2l-21.9 21.9-220.8-220.8z"})
);

export default CoreHeartSlashSolid;
