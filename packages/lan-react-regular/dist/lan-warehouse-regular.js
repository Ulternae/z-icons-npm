import React from 'react';

export function LanWarehouseRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M574.9 144c-4-21.5-18.8-39.8-39.7-47.9L305.4 6.8c-11.2-4.4-23.6-4.4-34.8 0L40.8 96.1C19.9 104.2 5.1 122.5 1.1 144c-.7 3.8-1.1 7.8-1.1 11.8V488c0 13.3 10.7 24 24 24s24-10.7 24-24V192h480v296c0 13.3 10.7 24 24 24s24-10.7 24-24V155.8c0-4-.4-7.9-1.1-11.8m-521.7 0c1.4-1.3 3.1-2.4 5-3.1L288 51.5l229.8 89.4c1.9.7 3.6 1.8 5 3.1zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24zM96 376c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24m24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanWarehouseRegular;
