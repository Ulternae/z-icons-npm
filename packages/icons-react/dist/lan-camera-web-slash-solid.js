import React from 'react';

export const LanCameraWebSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L447.3 381.5C487.3 341 512 285.4 512 224 512 100.3 411.7 0 288 0c-61.4 0-117 24.7-157.5 64.7zm134.8 134.8C204.7 81.5 244.3 64 288 64c88.4 0 160 71.6 160 160 0 43.7-17.5 83.3-45.9 112.2l-33.9-33.9c19.7-20.2 31.9-47.8 31.9-78.3 0-61.9-50.1-112-112-112-30.5 0-58.1 12.2-78.3 31.9L175.9 110zm136.5 272.3c-7.9 1.2-16.1 1.8-24.3 1.8-88.4 0-160-71.6-160-160q0-12.45 1.8-24.3l-52.3-52.4C68.8 171.2 64 197.1 64 224c0 115.6 87.6 210.8 200 222.7V480h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80v-33.3c18.3-2 36-6.1 52.7-12.2l-52.4-52.4z"})
);

export default LanCameraWebSlashSolid;
