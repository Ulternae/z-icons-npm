import React from 'react';

export const CoreBatterySlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M621.3 512 576 557.3 18.8 0 64-45.2zm-245-64H64c-35.3 0-64-28.7-64-64V128c0-15.7 5.6-30.1 15-41.2L376.2 448zM640 352h-64V160h64zM480 64c35.3 0 64 28.7 64 64v216.2L263.8 64z"})
);

export default CoreBatterySlashSolid;
