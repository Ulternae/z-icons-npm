import React from 'react';

export const LanCircleYenSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.1-380.7c11.4-6.7 26.1-2.8 32.8 8.6l51.3 87.7 51.3-87.7c6.7-11.4 21.4-15.3 32.8-8.6s15.3 21.4 8.6 32.8L295 256h25c8.8 0 16 7.2 16 16s-7.2 16-16 16h-40v32h40c8.8 0 16 7.2 16 16s-7.2 16-16 16h-40v24c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24h-40c-8.8 0-16-7.2-16-16s7.2-16 16-16h40v-32h-40c-8.8 0-16-7.2-16-16s7.2-16 16-16h25l-53.7-91.9c-6.7-11.4-2.8-26.1 8.6-32.8"})
);

export default LanCircleYenSolid;
