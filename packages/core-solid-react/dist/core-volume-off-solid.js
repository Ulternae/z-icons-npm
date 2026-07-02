import React from 'react';

export function CoreVolumeOffSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M320 480h-53.3c-13.8 0-27.3-4.5-38.4-12.8l-111-83.2H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h53.3l110.9-83.2c11.2-8.3 24.6-12.8 38.5-12.8H320z"})
  );
}

export default CoreVolumeOffSolid;
