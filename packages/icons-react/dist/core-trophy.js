import React from 'react';

export const CoreTrophy = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 64c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v4h124v140c0 59.6-48.4 108-108 108h-45.1c-23.1 32.8-58.2 56.5-98.9 64.8V448h80v64H176v-64h80v-67.2c-40.7-8.3-75.8-32-98.9-64.8H112C52.4 316 4 267.6 4 208V68h124zm315.9 196H464c28.7 0 52-23.3 52-52v-84h-68v100c0 12.4-1.4 24.4-4.1 36M128 224V124H60v84c0 28.7 23.3 52 52 52h20.1c-2.7-11.6-4.1-23.6-4.1-36m256 0V64H192v160c0 53 43 96 96 96s96-43 96-96"})
);

export default CoreTrophy;
