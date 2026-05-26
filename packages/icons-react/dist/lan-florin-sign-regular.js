import React from 'react';

export const LanFlorinSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M315.3 32c-36 0-68.3 21.9-81.7 55.3L179 224H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h103.8l-53.9 134.9C99.7 422 85 432 68.7 432H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h44.7c36 0 68.3-21.9 81.7-55.3l61-152.7H328c13.3 0 24-10.7 24-24s-10.7-24-24-24h-97.4l47.5-118.9C284.3 90 299 80 315.3 80H360c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanFlorinSignRegular;
