import React from 'react';

export function LanMailboxFlagUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 64h160v16h-94c46.3 23.9 78 72.3 78 128v208c0 19.1-8.4 36.3-21.7 48H512c26.5 0 48-21.5 48-48V224c0-42.6-18.5-81-48-107.3V96c38.9 29.2 64 75.7 64 128v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208C0 128.5 64.5 64 144 64m0 16C73.3 80 16 137.3 16 208v208c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V208c0-70.7-57.3-128-128-128M72 232c0-4.4 3.6-8 8-8h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H80c-4.4 0-8-3.6-8-8m280 0V88c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-72v72c0 4.4-3.6 8-8 8s-8-3.6-8-8m88-88c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v56z"})
  );
}

export default LanMailboxFlagUpThin;
