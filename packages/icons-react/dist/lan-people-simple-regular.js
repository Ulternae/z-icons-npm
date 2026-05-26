import React from 'react';

export const LanPeopleSimpleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192.1 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-96 144h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m0-48c-35.3 0-64 28.7-64 64v64c0 23.7 12.9 44.4 32 55.4V488c0 13.3 10.7 24 24 24s24-10.7 24-24V352h32v136c0 13.3 10.7 24 24 24s24-10.7 24-24V343.4c19.1-11.1 32-31.7 32-55.4v-64c0-35.3-28.7-64-64-64zm352-96a64 64 0 1 0-128 0 64 64 0 1 0 128 0m.4 272H319.8l28.9-101.3c4.5-15.8 19-26.7 35.4-26.7s30.9 10.9 35.4 26.7zm-64.4-176c-37.9 0-71.2 25.1-81.6 61.5l-34.7 121.7c-5.8 20.4 9.5 40.8 30.8 40.8h21.6v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h21.6c21.3 0 36.6-20.3 30.8-40.8l-34.9-121.7C455.3 185.1 422 160 384.1 160"})
);

export default LanPeopleSimpleRegular;
