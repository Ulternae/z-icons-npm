import React from 'react';

export const LanArrowTurnUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h96c53 0 96-43 96-96V81.9l95 95c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L209 7c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7L39 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l95-95V416c0 26.5-21.5 48-48 48h-96z"})
);

export default LanArrowTurnUpRegular;
