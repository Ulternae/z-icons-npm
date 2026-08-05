import React from 'react';

export function LanTicketsSimpleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 96v28.9c28.7 16.6 48 47.6 48 83.1s-19.3 66.6-48 83.1V320c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-28.9c-28.7-16.6-48-47.6-48-83.1s19.3-66.6 48-83.1V96c0-8.8-7.2-16-16-16H160c-8.8 0-16 7.2-16 16m-48 0c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v48c0 8.8-7.4 15.7-15.7 18.6C573.5 169.1 560 187 560 208s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v48c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64v-48c0-8.8 7.4-15.7 15.7-18.6C130.5 246.9 144 229 144 208s-13.5-38.9-32.3-45.4c-8.3-2.9-15.7-9.8-15.7-18.6zm-48 56v256c0 13.3 10.7 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.8 0-72-32.2-72-72V152c0-13.3 10.7-24 24-24s24 10.7 24 24"})
  );
}

export default LanTicketsSimpleRegular;
