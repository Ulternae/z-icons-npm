import React from 'react';

export const LanBracketRoundRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M156.6 43.7c6.8 11.4 3 26.1-8.3 32.9C115.3 96.2 48 160.7 48 256s67.3 159.7 100.3 179.4c11.4 6.8 15.1 21.5 8.3 32.9s-21.5 15.1-32.9 8.3C82 451.8 0 374.1 0 256S82 60.2 123.7 35.4c11.4-6.8 26.1-3 32.9 8.3"})
);

export default LanBracketRoundRegular;
