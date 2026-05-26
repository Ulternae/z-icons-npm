import React from 'react';

export const LanDumbbellThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M180.9 64.2C205.1 66.7 224 87.1 224 112v136h192V112c0-24.9 18.9-45.3 43.1-47.8l4.9-.2h16l4.9.2c18.7 1.9 34.2 14.6 40.3 31.8H560c26.5 0 48 21.5 48 48v104h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v104l-.2 4.9c-2.5 24.2-22.9 43.1-47.8 43.1h-34.8c-6.1 17.2-21.6 29.8-40.3 31.8l-4.9.2h-16l-4.9-.2c-24.2-2.5-43.1-22.9-43.1-47.8V264H224v136c0 24.9-18.9 45.3-43.1 47.8l-4.9.2h-16l-4.9-.2c-18.7-1.9-34.2-14.6-40.3-31.8H80c-24.9 0-45.3-18.9-47.8-43.1L32 368V264H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V144c0-26.5 21.5-48 48-48h34.8c6.1-17.2 21.6-29.8 40.3-31.8l4.9-.2h16zM464 80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm-304 0c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm-80 32c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h32V112zm448 288h32c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32h-32z"})
);

export default LanDumbbellThin;
