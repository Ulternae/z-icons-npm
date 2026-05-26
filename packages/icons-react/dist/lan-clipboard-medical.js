import React from 'react';

export const LanClipboardMedical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M136 80h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-13.3 0-24 10.7-24 24s10.7 24 24 24m0 32c-28.2 0-51.6-20.9-55.4-48H64c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32h-16.6c-3.9 27.1-27.2 48-55.4 48zM248 0c22.3 0 41.6 13.1 50.6 32H320c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h21.4c9-18.9 28.3-32 50.6-32zm-72 192h32c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-16v16c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-16h-16c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h16v-16c0-17.7 14.3-32 32-32m32 136v-16c0-4.4 3.6-8 8-8h40v-32h-40c-4.4 0-8-3.6-8-8v-40h-32v40c0 4.4-3.6 8-8 8h-40v32h40c4.4 0 8 3.6 8 8v40h32z"})
);

export default LanClipboardMedical;
