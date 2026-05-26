import React from 'react';

export const LanLinkHorizontalSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L513 447.3c38.3-29.2 62.9-75.3 62.9-127.2 0-59.3-32.3-111.1-80.3-138.8.2 3.6.3 7.1.3 10.8 0 21.9-3.4 42.9-9.6 62.7 15.9 17.1 25.6 40.1 25.6 65.3 0 34.2-17.9 64.3-44.9 81.3l-82.1-82.1C423.3 290 448 243.9 448 192c0-88.4-71.6-160-160-160H160c-18.6 0-36.5 3.2-53.1 9zM161.8 96H288c53 0 96 43 96 96 0 34.2-17.9 64.3-44.9 81.3L289.8 224H304c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16c-18.6 0-36.5 3.2-53.1 9l-73-73zm248.4 384-64-64H288c-53 0-96-43-96-96 0-16.8 4.3-32.6 11.9-46.3l-46.3-46.3c-18.6 26.1-29.5 58.1-29.5 92.6 0 88.4 71.6 160 160 160h122.2zM29.5 99.4C10.9 125.5 0 157.5 0 192c0 59.3 32.3 111.1 80.3 138.8-.2-3.6-.3-7.1-.3-10.8 0-21.9 3.4-42.9 9.6-62.7C73.7 240.2 64 217.2 64 192c0-16.8 4.3-32.6 11.9-46.3z"})
);

export default LanLinkHorizontalSlashSolid;
