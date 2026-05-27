import React from 'react';

export const CoreFlagSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32h114.8c27.2 0 53.3 10.1 73.3 28.2l7.9 7.5c18.7 16.9 42.7 26.9 67.9 28.1l5.4.1H384c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H269.3l-5.4-.1c-25.2-1.2-49.2-11.2-67.9-28.1l-7.9-7.5c-18.7-16.9-42.7-26.9-67.9-28.1l-5.4-.1H64v160H0V0h64z"})
);

export default CoreFlagSolid;
