import React from 'react';

export const LanTankRecoveryThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 0c35.3 0 64 28.7 64 64v53.6c37.3 13.2 64 48.7 64 90.4v64h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v64c0 41.8-26.7 77.2-64 90.4V480c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-37.6c-35.8-12.7-61.9-45.8-63.9-85.5L32 352v-64H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-64c0-41.8 26.7-77.2 64-90.4V64c0-35.3 28.7-64 64-64zM112 480c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-33.3c-5.2.9-10.5 1.3-16 1.3H128c-5.5 0-10.8-.6-16-1.4zM48 352c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80v-64H48zm80-224c-44.2 0-80 35.8-80 80v64h352v-64c0-44.2-35.8-80-80-80zm32-112c-26.5 0-48 21.5-48 48v49.3c5.2-.9 10.5-1.3 16-1.3h88V72h-32c-4.4 0-8-3.6-8-8s3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-32v40h88c5.4 0 10.8.4 16 1.3V64c0-26.5-21.5-48-48-48z"})
);

export default LanTankRecoveryThin;
