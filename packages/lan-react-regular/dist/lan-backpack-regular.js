import React from 'react';

export function LanBackpackRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M184 48h80c4.4 0 8 3.6 8 8v24h-96V56c0-4.4 3.6-8 8-8m-56 8v24C57.3 80 0 137.3 0 208v240c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V208c0-70.7-57.3-128-128-128V56c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56m224 408V344c0-39.8-32.2-72-72-72H168c-39.8 0-72 32.2-72 72v120H64c-8.8 0-16-7.2-16-16V208c0-44.2 35.8-80 80-80h192c44.2 0 80 35.8 80 80v240c0 8.8-7.2 16-16 16zm-208 0V344c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v120zm8-288c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanBackpackRegular;
