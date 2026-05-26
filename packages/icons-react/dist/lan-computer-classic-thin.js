import React from 'react';

export const LanComputerClassicThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 16c26.5 0 48 21.5 48 48v304c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v304c0 23.7 12.9 44.4 32 55.4V480c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-56.6c19.1-11.1 32-31.7 32-55.4V64c0-35.3-28.7-64-64-64zM48 480v-50c5.1 1.3 10.5 2 16 2h320c5.5 0 10.9-.7 16-2v50c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16m184-144c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-136 8a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0-264h256c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16M64 96v160c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32"})
);

export default LanComputerClassicThin;
