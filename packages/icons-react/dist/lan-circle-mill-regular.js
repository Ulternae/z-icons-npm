import React from 'react';

export const LanCircleMillRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m70.5-414.6c-8.1-3.6-17.5 0-21.1 8.1l-26.2 58.9c-8.6 3.2-16.5 7.9-23.2 13.9-12.7-11.4-29.6-18.3-48-18.3-11.1 0-21.6 2.5-31 7-4.3-4.3-10.3-7-17-7-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3 10.7-24 24-24 13.1 0 23.8 10.5 24 23.6v39l-54.6 122.9c-3.6 8.1 0 17.5 8.1 21.1s17.5 0 21.1-8.1l29.1-65.6c4.3 6.7 11.7 11.1 20.2 11.1 13.3 0 24-10.7 24-24v-86.6l13.8-31.1c3.1-1.4 6.5-2.2 10.2-2.2 13.3 0 24 10.7 24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-35.8-26.1-65.4-60.2-71l18.9-42.5c3.6-8.1 0-17.5-8.1-21.1z"})
);

export default LanCircleMillRegular;
