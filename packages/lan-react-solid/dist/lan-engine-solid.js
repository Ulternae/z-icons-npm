import React from 'react';

export function LanEngineSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M376 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H200c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v48H144c-26.5 0-48 21.5-48 48v56H64v-80c0-13.3-10.7-24-24-24s-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24v-80h32v56c0 26.5 21.5 48 48 48h37.3l23.7 35.5c11.9 17.8 31.9 28.5 53.3 28.5H384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64h-72V80zm120 104v208c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24m-168 56H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24"})
  );
}

export default LanEngineSolid;
