import React from 'react';

export const LanComputerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 384H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h277.5c2-5.6 4.5-10.9 7.4-16H64C28.7 32 0 60.7 0 96v240c0 35.3 28.7 64 64 64h272zm5.5 80H104c-4.4 0-8 3.6-8 8s3.6 8 8 8h244.8c-2.9-5.1-5.4-10.4-7.4-16zM432 48h96c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32m-48 32v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48m64 40c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8m0 96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8m32 136a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanComputerThin;
