import React from 'react';

export const CoreArrowDownToBracketRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 320v96c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-96h64v96c0 53-43 96-96 96H96c-53 0-96-43-96-96v-96zm192-77.3 96-96 45.3 45.3-150.6 150.6-2.4 2.2c-12.6 10.2-31.1 9.5-42.8-2.2L50.8 192 96 146.7l96 96V0h64z"})
);

export default CoreArrowDownToBracketRegular-duo;
