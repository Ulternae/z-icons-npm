import React from 'react';

export const LanDesktopSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L459.4 416H480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H96c-6.3 0-12.3.9-18 2.6zm77.9 78c1.4-.1 2.9-.2 4.4-.2h384c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48h-36.6l-48-48H464c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H139.4zM379.4 336l-224-224H464v224zm-74.6 16-16-16H112V159.2l-16-16V336c0 8.8 7.2 16 16 16zM48 96v-.8L33.8 81Q32 88.2 32 96v256c0 35.3 28.7 64 64 64h126.6l-13.3 80h-73.2c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8h-73.2l-13.3-80H369l-16-16H96.2c-26.5 0-48-21.5-48-48zm177.4 400 13.3-80h98.4l13.3 80H225.3z"})
);

export default LanDesktopSlashThin;
