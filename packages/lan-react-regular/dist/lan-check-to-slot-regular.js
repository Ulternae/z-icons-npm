import React from 'react';

export function LanCheckToSlotRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M552 288c13.3 0 24 10.7 24 24v104c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V312c0-13.3 10.7-24 24-24s24 10.7 24 24v104c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V312c0-13.3 10.7-24 24-24M416 32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM160 80c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zm164.7 63.9c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5l-76.1 104.7c-4.2 5.7-10.7 9.3-17.8 9.8s-14-2.2-18.9-7.3l-35.9-37.2c-9.2-9.5-8.9-24.7.6-33.9s24.7-9 33.9.6l16.1 16.6 59.3-81.6z"})
  );
}

export default LanCheckToSlotRegular;
