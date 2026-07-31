import React from 'react';

export const LanSquareTurkishLiraRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm184 32c13.3 0 24 10.7 24 24v44.5l58.9-19.6c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2l-69.1 23v30.3l58.9-19.6c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2l-69.1 23V336h48c26.5 0 48-21.5 48-48 0-13.3 10.7-24 24-24s24 10.7 24 24c0 53-43 96-96 96h-72c-13.3 0-24-10.7-24-24v-49.8l-26.9 9c-8.4 2.8-17.4-1.7-20.2-10.1s1.7-17.4 10.1-20.2l37.1-12.4v-30.3l-26.9 9c-8.4 2.8-17.4-1.7-20.2-10.1s1.7-17.4 10.1-20.2l37.1-12.4V152c0-13.3 10.7-24 24-24"})
);

export default LanSquareTurkishLiraRegular;
