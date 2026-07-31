import React from 'react';

export const LanWardrobeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M504 0c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v488c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24H48v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V16H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zM48 464h200V16H48zm216 0h200V16H264zm-80-272c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8m144 0c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-4.4 3.6-8 8-8"})
);

export default LanWardrobeThin;
