import React from 'react';

export const LanMapSignsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232 24c0-13.3 10.7-24 24-24s24 10.7 24 24v24h160.3c4.9 0 9.5 2.2 12.5 6l51.2 64c4.7 5.8 4.7 14.1 0 20l-51.2 64c-3 3.8-7.6 6-12.5 6H280v32h160c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40H280v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88H71.7c-4.9 0-9.5-2.2-12.5-6L8 330c-4.7-5.8-4.7-14.1 0-20l51.2-64c3-3.8 7.6-6 12.5-6H232v-32H64c-17.7 0-32-14.3-32-32V88c0-22.1 17.9-40 40-40h160zM80 96v64h344.9l25.6-32-25.6-32zm352 256v-64H87.1l-25.6 32 25.6 32z"})
);

export default LanMapSignsRegular;
