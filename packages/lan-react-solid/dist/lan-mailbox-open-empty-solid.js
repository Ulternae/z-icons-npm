import React from 'react';

export function LanMailboxOpenEmptySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 64c88.4 0 160 71.6 160 160v192c0 35.3-28.7 64-64 64H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h72V208c0-79.5 64.5-144 144-144zm-240 48c-53 0-96 43-96 96v224h176c8.8 0 16-7.2 16-16V208c0-53-43-96-96-96m200 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v40c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-64c0-13.3-10.7-24-24-24z"})
  );
}

export default LanMailboxOpenEmptySolid;
