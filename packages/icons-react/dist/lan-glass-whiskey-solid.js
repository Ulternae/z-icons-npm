import React from 'react';

export const LanGlassWhiskeySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 32C14.3 32 0 46.3 0 64v288c0 70.7 57.3 128 128 128h192c70.7 0 128-57.3 128-128V64c0-17.7-14.3-32-32-32zm32 224V96h320v160z"})
);

export default LanGlassWhiskeySolid;
