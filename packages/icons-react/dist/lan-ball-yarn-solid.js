import React from 'react';

export const LanBallYarnSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M207 136 243.4.3C150.7 4.8 71 58.6 29.8 136zM292.5 2.6 256.7 136h66.6l31.2-116.4c-19.6-8.2-40.4-14-62-17.1zM117.2 471.2l25.5-95.2H29.8c20.6 38.7 50.8 71.5 87.4 95.2m75.2-95.2-31.5 117.7c19.7 7.9 40.5 13.4 62.3 16.2L259 376zm289.8-240c-20-37.6-49-69.6-84.2-93.1L373 136zm0 240H308.7l-36.4 136H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-82.7c31.9-23 58.3-53.1 76.9-88m19.5-48c4.5-15.4 7.6-31.5 9.2-48H1.1c1.5 16.5 4.6 32.6 9.2 48h491.5zm0-144H10.3c-4.5 15.4-7.6 31.5-9.2 48h509.8c-1.5-16.5-4.6-32.6-9.2-48"})
);

export default LanBallYarnSolid;
