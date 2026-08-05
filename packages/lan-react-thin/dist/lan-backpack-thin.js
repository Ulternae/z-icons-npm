import React from 'react';

export function LanBackpackThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M184 16h80c13.3 0 24 10.7 24 24v40H160V40c0-13.3 10.7-24 24-24m-40 24v40h-16C57.3 80 0 137.3 0 208v240c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V208c0-70.7-57.3-128-128-128h-16V40c0-22.1-17.9-40-40-40h-80c-22.1 0-40 17.9-40 40m208 456V344c0-30.9-25.1-56-56-56H152c-30.9 0-56 25.1-56 56v152H64c-26.5 0-48-21.5-48-48V208c0-61.9 50.1-112 112-112h192c61.9 0 112 50.1 112 112v240c0 26.5-21.5 48-48 48zm-240 0V344c0-22.1 17.9-40 40-40h144c22.1 0 40 17.9 40 40v152zm24-304c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
  );
}

export default LanBackpackThin;
