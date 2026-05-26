import React from 'react';

export const LanHandHorns = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88 32c13.3 0 24 10.7 24 24v184H80c-5.5 0-10.8.6-16 1.6V56c0-13.3 10.7-24 24-24m56 117.4V56c0-30.9-25.1-56-56-56S32 25.1 32 56v200c-19.4 14.6-32 37.8-32 64v32c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V120c0-30.9-25.1-56-56-56s-56 25.1-56 56v61.4c-7.3-3.5-15.4-5.4-24-5.4-9.7 0-18.8 2.5-26.7 6.8C214 160.3 192.9 144 168 144c-8.6 0-16.7 1.9-24 5.4m0 50.6c0-13.3 10.7-24 24-24s24 10.7 24 24v45.4c-7.3-3.5-15.4-5.4-24-5.4h-24zm80 72v-40c0-13.2 10.8-24 24-24 13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24s-24-10.7-24-24zm-112 0h56c13.2 0 24 10.7 24 24s-10.7 24-24 24h-56c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c15.7 0 29.8-6.4 40-16.8 10.2 10.4 24.3 16.8 40 16.8 30.9 0 56-25.1 56-56V120c0-13.3 10.7-24 24-24s24 10.7 24 24v232c0 70.7-57.3 128-128 128h-64c-70.7 0-128-57.3-128-128v-32c0-26.5 21.5-48 48-48z"})
);

export default LanHandHorns;
