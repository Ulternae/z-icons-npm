import React from 'react';

export const LanEarThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 192c0 58.9-28.9 111-73.3 143-13.6 9.8-26.3 23.1-33.3 40.5l-20.1 50.2c-17 42.5-58.2 70.4-104 70.4H128C66.1 496 16 445.9 16 384V192C16 94.8 94.8 16 192 16s176 78.8 176 176m-91.7 189.4c5.5-13.7 15.8-24.8 27.8-33.4 48.4-34.9 80-91.7 80-156 0-106-86-192-192-192S0 86 0 192v192c0 70.7 57.3 128 128 128h9.3c52.3 0 99.4-31.9 118.8-80.5l20.1-50.2zM96 192c0-53 43-96 96-96s96 43 96 96v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-61.9-50.1-112-112-112S80 130.1 80 192v40c0 4.4 3.6 8 8 8h16c22.1 0 40 17.9 40 40s-17.9 40-40 40H88c-4.4 0-8 3.6-8 8s3.6 8 8 8h16c30.9 0 56-25.1 56-56s-25.1-56-56-56h-8z"})
);

export default LanEarThin;
