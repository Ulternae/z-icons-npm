import React from 'react';

export const LanWineBottleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96-48v183c-47.4 23.6-80 72.5-80 129v240c0 39.8 32.2 72 72 72h144c39.8 0 72-32.2 72-72V264c0-56.6-32.6-105.5-80-129V-48h8c4.4 0 8-3.6 8-8s-3.6-8-8-8H88c-4.4 0-8 3.6-8 8s3.6 8 8 8zm16 0h96v96h-96zm0 112h96v76c0 3.1 1.8 6 4.7 7.3C257.1 167.4 288 212.1 288 264v8H32v-8c0-51.9 30.9-96.6 75.3-116.7 2.9-1.3 4.7-4.1 4.7-7.3zm176 224v160H32V288zm0 176v40c0 30.9-25.1 56-56 56H88c-30.9 0-56-25.1-56-56v-40z"})
);

export default LanWineBottleThin;
