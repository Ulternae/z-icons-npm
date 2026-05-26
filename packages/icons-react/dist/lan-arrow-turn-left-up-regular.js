import React from 'react';

export const LanArrowTurnLeftUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M360 464c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-53 0-96-43-96-96V81.9l-95 95c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L175 7c4.5-4.5 10.6-7 17-7s12.5 2.5 17 7l136 136c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-95-95V416c0 26.5 21.5 48 48 48h96z"})
);

export default LanArrowTurnLeftUpRegular;
