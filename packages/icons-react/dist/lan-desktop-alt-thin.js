import React from 'react';

export const LanDesktopAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 48c26.5 0 48 21.5 48 48v224H16V96c0-26.5 21.5-48 48-48zm48 288v16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-16zM64 416h126.6l-13.3 80h-73.2c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8h-73.2l-13.3-80h126.6c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64m129.4 80 13.3-80h98.4l13.3 80H193.3z"})
);

export default LanDesktopAltThin;
