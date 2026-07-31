import React from 'react';

export const LanSynagogueSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 80c0-35.3 28.7-64 64-64s64 28.7 64 64v32H16zm0 368V160h128l126.2-84.2c10.7-7.2 24.8-7.2 35.5 0L431.9 160h128v288c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64m544-336H432V80c0-35.3 28.7-64 64-64s64 28.7 64 64zM224 384v80h128v-80c0-35.3-28.7-64-64-64s-64 28.7-64 64m64-152a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanSynagogueSolid;
