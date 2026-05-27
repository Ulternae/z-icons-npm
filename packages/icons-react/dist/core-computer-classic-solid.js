import React from 'react';

export const CoreComputerClassicSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 0c35.3 0 64 28.7 64 64v332.6c0 12.6-3.7 25-10.7 35.5L467 483.5c-11.9 17.8-31.9 28.5-53.3 28.5H98.2c-21.4 0-41.4-10.7-53.2-28.5l-34.2-51.4C3.7 421.6 0 409.3 0 396.6V64C0 28.7 28.7 0 64 0zM288 408h128v-48H288zM96 96v192h320V96z"})
);

export default CoreComputerClassicSolid;
