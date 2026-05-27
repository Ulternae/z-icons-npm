import React from 'react';

export const CoreBoxArchiveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 64v64H64V64zM0 128c0 23.7 12.9 44.4 32 55.4V448c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V183.4c19.1-11.1 32-31.7 32-55.4V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zm352 136v48H160v-48z"})
);

export default CoreBoxArchiveSolid;
