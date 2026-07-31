import React from 'react';

export const LanHouseFlagRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M472 0c-13.3 0-24 10.7-24 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V192h112c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H496v-8c0-13.3-10.7-24-24-24m-72 192.8L256.6 54.7c-9.3-8.9-24-8.9-33.3 0l-216 208c-9.5 9.2-9.8 24.4-.6 33.9s24.4 9.8 33.9.6l7.4-7V448c0 35.3 28.7 64 64 64h288v-48H112c-8.8 0-16-7.2-16-16V244l144-138.7 160 154.1zM216 256c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"})
);

export default LanHouseFlagRegular;
