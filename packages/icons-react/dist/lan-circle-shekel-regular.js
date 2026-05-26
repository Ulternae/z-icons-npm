import React from 'react';

export const LanCircleShekelRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M152 136c-13.3 0-24 10.7-24 24v192c0 13.3 10.7 24 24 24s24-10.7 24-24V184h64c13.3 0 24 10.7 24 24v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-56c0-39.8-32.2-72-72-72zm232 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v144c0 13.3-10.7 24-24 24h-64v-80c0-13.3-10.7-24-24-24s-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17s10.6 7 17 7h88c39.8 0 72-32.2 72-72z"})
);

export default LanCircleShekelRegular;
