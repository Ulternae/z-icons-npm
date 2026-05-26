import React from 'react';

export const LanMegaphoneRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M488 32c-13.3 0-24 10.7-24 24v13.5l-416 117V184c0-13.3-10.7-24-24-24S0 170.7 0 184v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-2.5l86.3 24.3c-4.1 10.6-6.3 22.2-6.3 34.2 0 53 43 96 96 96 47 0 86.2-33.8 94.4-78.5l145.6 41V456c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24m-24 360.6-416-117v-39.3l416-117zm-192.2-4.2C269.6 412.8 249 432 224 432c-26.5 0-48-21.5-48-48 0-7.6 1.8-14.8 4.9-21.1l90.9 25.6z"})
);

export default LanMegaphoneRegular;
