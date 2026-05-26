import React from 'react';

export const LanArrowTurnRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 424c0 13.3-10.7 24-24 24S0 437.3 0 424v-96c0-53 43-96 96-96h334.1l-95-95c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L505 239c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17L369 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l95-95H96c-26.5 0-48 21.5-48 48v96z"})
);

export default LanArrowTurnRightRegular;
