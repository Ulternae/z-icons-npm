import React from 'react';

export const LanRadioAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.006 512.062 544.006',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M494.8 15c12.7-3.7 20-17.1 16.3-29.8S494-34.8 481.3-31L51.8 94.9c-9.4 2.7-17.9 7.2-25.2 13.1C10.5 119.7 0 138.6 0 160v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H218.5zM384 280a72 72 0 1 1 0 144 72 72 0 1 1 0-144M64 192c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32m32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanRadioAltSolid;
