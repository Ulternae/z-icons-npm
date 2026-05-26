import React from 'react';

export const LanUserViewfinderRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 64v72c0 13.3 10.7 24 24 24s24-10.7 24-24V64c0-8.8 7.2-16 16-16h72c13.3 0 24-10.7 24-24S149.3 0 136 0H64C28.7 0 0 28.7 0 64m352-40c0 13.3 10.7 24 24 24h72c8.8 0 16 7.2 16 16v72c0 13.3 10.7 24 24 24s24-10.7 24-24V64c0-35.3-28.7-64-64-64h-72c-13.3 0-24 10.7-24 24M24 352c-13.3 0-24 10.7-24 24v72c0 35.3 28.7 64 64 64h72c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16v-72c0-13.3-10.7-24-24-24m464 0c-13.3 0-24 10.7-24 24v72c0 8.8-7.2 16-16 16h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72c35.3 0 64-28.7 64-64v-72c0-13.3-10.7-24-24-24M256 208a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-80-32a80 80 0 1 0 160 0 80 80 0 1 0-160 0m48 112c-53 0-96 43-96 96v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-53-43-96-96-96z"})
);

export default LanUserViewfinderRegular;
