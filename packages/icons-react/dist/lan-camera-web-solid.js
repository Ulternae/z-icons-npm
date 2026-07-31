import React from 'react';

export const LanCameraWebSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 224a160 160 0 1 1 320 0 160 160 0 1 1-320 0m184 222.7C360.4 434.8 448 339.6 448 224 448 100.3 347.7 0 224 0S0 100.3 0 224c0 115.6 87.6 210.8 200 222.7V480h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80zM224 336a112 112 0 1 0 0-224 112 112 0 1 0 0 224"})
);

export default LanCameraWebSolid;
