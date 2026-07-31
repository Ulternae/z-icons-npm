import React from 'react';

export const LanDiscDriveRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 80c-8.8 0-16 7.2-16 16v336h352V96c0-8.8-7.2-16-16-16zM32 432V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v336h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm224-80a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-240a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanDiscDriveRegular;
