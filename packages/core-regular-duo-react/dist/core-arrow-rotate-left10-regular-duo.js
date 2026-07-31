import React from 'react';

export function CoreArrowRotateLeft10RegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 64c-74 0-138.3 41.9-170.4 103.3C78 181.8 62.8 192 45.2 192 20.2 192 0 171.8 0 146.8V32h64v54.7C110.9 33.6 179.5 0 256 0c141.4 0 256 114.6 256 256S397.4 512 256 512c-102.2 0-190.3-59.9-231.3-146.3l57.8-27.5c30.9 64.9 97 109.7 173.5 109.7 106 0 192-86 192-192S362 64 256 64M132 344V168h56v176zm148-180h48c28.7 0 52 23.3 52 52v80c0 28.7-23.3 52-52 52h-48c-28.7 0-52-23.3-52-52v-80c0-28.7 23.3-52 52-52m44 128v-72h-40v72z"})
  );
}

export default CoreArrowRotateLeft10RegularDuo;
