import React from 'react';

export function LanHexagonCheckRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M383.8 16c25.8 0 49.7 13.8 62.5 36.2l96.2 168c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.2c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2L33.5 291.8c-12.7-22.2-12.7-49.4 0-71.5l96.2-168C142.5 29.8 166.4 16 192.2 16zM192.2 64c-8.6 0-16.6 4.6-20.8 12.1l-96.2 168c-4.2 7.4-4.2 16.5 0 23.8L171.4 436c4.3 7.5 12.2 12.1 20.8 12.1h191.6c8.6 0 16.6-4.6 20.8-12.1l96.3-168c4.2-7.4 4.2-16.5 0-23.8l-96.2-168c-4.3-7.6-12.3-12.2-20.9-12.2zm166.5 105.9c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5l-122.1 168c-4.1 5.7-10.5 9.3-17.5 9.8s-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36L358.7 170z"})
  );
}

export default LanHexagonCheckRegular;
