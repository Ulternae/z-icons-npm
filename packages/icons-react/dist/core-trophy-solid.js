import React from 'react';

export const CoreTrophySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 0c-35.3 0-64 28.7-64 64v4H4v140c0 59.6 48.4 108 108 108h45.1c23.1 32.8 58.2 56.5 98.9 64.8V448h-80v64h224v-64h-80v-67.2c40.7-8.3 75.8-32 98.9-64.8H464c59.6 0 108-48.4 108-108V68H448v-4c0-35.3-28.7-64-64-64zm272 260h-20.1c2.7-11.6 4.1-23.6 4.1-36V124h68v84c0 28.7-23.3 52-52 52m-331.9 0H112c-28.7 0-52-23.3-52-52v-84h68v100c0 12.4 1.4 24.4 4.1 36"})
);

export default CoreTrophySolid;
