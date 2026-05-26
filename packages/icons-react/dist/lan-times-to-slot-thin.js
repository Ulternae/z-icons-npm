import React from 'react';

export const LanTimesToSlotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M568 288c4.4 0 8 3.6 8 8v128c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V296c0-4.4 3.6-8 8-8s8 3.6 8 8v128c0 22.1 17.9 40 40 40h464c22.1 0 40-17.9 40-40V296c0-4.4 3.6-8 8-8M416 32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM160 48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zm181.8 94.8c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-53.8 53.8 53.8 53.8c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L288 219.2 234.2 273c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l53.8-53.8-53.8-53.8c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l53.8 53.8z"})
);

export default LanTimesToSlotThin;
