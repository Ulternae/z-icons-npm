import React from 'react';

export const LanPeoplePantsSimpleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0M64 208h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m0-48c-35.3 0-64 28.7-64 64v64c0 23.7 12.9 44.4 32 55.4V488c0 13.3 10.7 24 24 24s24-10.7 24-24V352h32v136c0 13.3 10.7 24 24 24s24-10.7 24-24V343.4c19.1-11.1 32-31.7 32-55.4v-64c0-35.3-28.7-64-64-64zm352-96a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-96 144h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m0-48c-35.3 0-64 28.7-64 64v64c0 23.7 12.9 44.4 32 55.4V488c0 13.3 10.7 24 24 24s24-10.7 24-24V352h32v136c0 13.3 10.7 24 24 24s24-10.7 24-24V343.4c19.1-11.1 32-31.7 32-55.4v-64c0-35.3-28.7-64-64-64z"})
);

export default LanPeoplePantsSimpleRegular;
