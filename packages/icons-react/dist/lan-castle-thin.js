import React from 'react';

export const LanCastleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M136 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v184H16v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v280c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H392V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v72H264V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v72H136zm0 88h240v104c0 4.4 3.6 8 8 8h112v208c0 26.5-21.5 48-48 48H336v-96c0-44.2-35.8-80-80-80s-80 35.8-80 80v96H64c-26.5 0-48-21.5-48-48V240h112c4.4 0 8-3.6 8-8zm120 208c35.3 0 64 28.7 64 64v96H192v-96c0-35.3 28.7-64 64-64"})
);

export default LanCastleThin;
