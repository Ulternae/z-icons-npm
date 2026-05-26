import React from 'react';

export const LanToiletsPortableRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M72 48h80c13.3 0 24 10.7 24 24v24H48V72c0-13.3 10.7-24 24-24M0 96v392c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h128v8c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-39.8-32.2-72-72-72H72C32.2 0 0 32.2 0 72zm176 48v80h-24c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h24v112H48V144zm184-96h80c13.3 0 24 10.7 24 24v24H336V72c0-13.3 10.7-24 24-24m-24 384V144h128v80h-24c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h24v112zm176 0V72c0-39.8-32.2-72-72-72h-80c-39.8 0-72 32.2-72 72v416c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h128v8c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
);

export default LanToiletsPortableRegular;
