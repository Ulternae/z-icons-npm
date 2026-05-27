import React from 'react';

export const CoreSignalSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zm-181 0H87.2c-30.4 0-55-24.6-55-55 0-15.9 6.9-31 18.9-41.5l156.6-136.3zM550 0c32.1 0 58.2 26.1 58.2 58.2v350L352.7 152.7l159-138.5C522.4 5.1 536 0 550 0"})
);

export default CoreSignalSlashSolid;
