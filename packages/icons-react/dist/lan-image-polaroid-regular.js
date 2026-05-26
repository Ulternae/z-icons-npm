import React from 'react';

export const LanImagePolaroidRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 384h352v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM400 96v240H48V96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16m48 240V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-170.8-80H170.9l53.2-56.6 53.2 56.6zm-173.7 1.7c-4.8 5.1-7.5 11.8-7.5 18.8 0 15.2 12.3 27.5 27.5 27.5h201c15.2 0 27.5-12.3 27.5-27.5 0-7-2.7-13.7-7.5-18.8l-97.2-103.6c-6-6.4-14.5-10.1-23.3-10.1s-17.3 3.7-23.3 10.1zM112 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanImagePolaroidRegular;
