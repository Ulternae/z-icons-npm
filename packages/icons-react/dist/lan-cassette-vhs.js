import React from 'react';

export const LanCassetteVhs = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v16h448v-16c0-17.7-14.3-32-32-32zm-32 80v208c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V176zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm192 224h128v-96H192zm160-16v16h48c10.1-13.4 16-30 16-48s-5.9-34.6-16-48h-48v16c17.7 0 32 14.3 32 32s-14.3 32-32 32m-224-32c0-17.7 14.3-32 32-32v-16h-48c-10.1 13.4-16 30-16 48s5.9 34.6 16 48h48v-16c-17.7 0-32-14.3-32-32m-17.3 80c-8.4 0-16.6-3.1-21.8-9.7-15.5-19.2-24.8-43.7-24.8-70.3s9.3-51.1 24.8-70.3c5.3-6.5 13.5-9.7 21.8-9.7h290.6c8.4 0 16.6 3.2 21.8 9.7 15.5 19.2 24.8 43.7 24.8 70.3s-9.3 51.1-24.8 70.3c-5.3 6.5-13.5 9.7-21.8 9.7z"})
);

export default LanCassetteVhs;
