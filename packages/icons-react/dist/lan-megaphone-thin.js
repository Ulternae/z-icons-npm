import React from 'react';

export const LanMegaphoneThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 64c0-8.8-7.2-16-16-16s-16 7.2-16 16v384c0 8.8 7.2 16 16 16s16-7.2 16-16zm-48 0c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32v-10l-129.6-36.5C310.2 446.1 271 480 224 480c-53 0-96-43-96-96 0-12.1 2.2-23.6 6.3-34.2l-71.8-20.2C58.4 342.6 46.3 352 32 352c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32 14.3 0 26.5 9.4 30.5 22.4L448 74zm0 26.6-384 108v114.8l384 108zM149.8 354.1c-3.7 9.2-5.8 19.3-5.8 29.9 0 44.2 35.8 80 80 80 39.7 0 72.6-28.9 78.9-66.8zM48 320V192c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16"})
);

export default LanMegaphoneThin;
