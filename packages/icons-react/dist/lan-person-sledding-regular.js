import React from 'react';

export const LanPersonSleddingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96M128 152c0-13.3 10.7-24 24-24h169.4c35.6 0 53.5 43.1 28.3 68.3L281.9 264H344c22.1 0 40 17.9 40 40v80c0 7.7-3.7 14.6-9.4 19l43.9 22.8c13.6 7.1 29.8 7.2 43.6.3l15.2-7.6c11.9-5.9 26.3-1.1 32.2 10.7s1.1 26.3-10.7 32.2l-15.2 7.6c-27.5 13.7-59.9 13.5-87.2-.7l-383.5-199c-11.7-6.1-16.3-20.6-10.2-32.4s20.6-16.3 32.4-10.2l124.1 64.4c-4.3-11.5-2.2-25.4 8.8-35.1l90.7-80H152c-13.3 0-24-10.7-24-24m208 160H199.3L336 383z"})
);

export default LanPersonSleddingRegular;
