import React from 'react';

export const LanGarageCarThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M576 150.3V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V192H16v312c0 4.4-3.6 8-8 8s-8-3.6-8-8V150.3c0-23.1 14.2-43.8 35.7-52.2L270.6 6.8c11.2-4.4 23.6-4.4 34.8 0l234.9 91.3c21.5 8.4 35.7 29.1 35.7 52.2m-16 0c0-16.5-10.1-31.3-25.5-37.3L299.6 21.7c-7.5-2.9-15.7-2.9-23.2 0L41.5 113C26.1 119 16 133.8 16 150.3V176h544zM218.4 272c-8.5 0-16.4 4.5-20.7 11.9L158 352h260.1l-39.7-68.1a23.93 23.93 0 0 0-20.7-11.9H218.5zM152 373v91h272v-91c0-1.7-.1-3.3-.3-5H152.3c-.2 1.6-.3 3.3-.3 5m272 131v-24H152v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V373c0-9.9 2.6-19.7 7.6-28.2l40.2-68.9c7.2-12.3 20.3-19.8 34.6-19.8h139.2c14.2 0 27.4 7.6 34.6 19.8l40.2 68.9c5 8.6 7.6 18.3 7.6 28.2v131c0 4.4-3.6 8-8 8s-8-3.6-8-8m-56-88a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanGarageCarThin;
